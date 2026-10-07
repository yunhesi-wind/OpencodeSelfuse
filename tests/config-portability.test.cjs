const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'opencode.jsonc'), 'utf8'));

test('MCP template uses native V2 fields and preserves enablement', () => {
  assert.equal(config.$schema, 'https://opencode.ai/config.json');
  assert.equal(config.skills, undefined);
  assert.deepEqual(Object.keys(config.mcp), ['servers']);
  const servers = config.mcp.servers;
  assert.equal(Object.keys(servers).length, 8);
  assert.equal(Object.values(servers).filter((s) => !s.disabled).length, 7);
  assert.equal(servers.firebase.disabled, true);
  for (const server of Object.values(servers)) {
    assert.equal(server.enabled, undefined);
    assert.equal(typeof server.disabled, 'boolean');
    if (server.type === 'local') assert.ok(Array.isArray(server.command) && server.command.length);
    else assert.equal(new URL(server.url).protocol, 'https:');
  }
});

test('credentials remain environment references and commands have no personal paths', () => {
  for (const server of Object.values(config.mcp.servers)) {
    for (const value of Object.values(server.headers || {})) assert.match(value, /^(?:Bearer )?\{env:[A-Z_][A-Z0-9_]*\}$/);
    for (const [key, value] of Object.entries(server.environment || {})) {
      if (key !== 'GITLAB_API_URL') assert.match(value, /^\{env:[A-Z_][A-Z0-9_]*\}$/);
    }
    for (const argument of server.command || []) assert.doesNotMatch(argument, /(?:[A-Z]:[\\/]|\/Users\/|\/home\/)/i);
  }
});

test('49 recorded skills have portable IDs and discoverable descriptions', () => {
  const skills = path.join(root, 'skills');
  const ids = fs.readdirSync(skills).filter((id) => fs.statSync(path.join(skills, id)).isDirectory());
  assert.equal(ids.length, 49);
  for (const id of ids) {
    assert.match(id, /^[a-z0-9]+(-[a-z0-9]+)*$/);
    assert.ok(id.length <= 64);
    const text = fs.readFileSync(path.join(skills, id, 'SKILL.md'), 'utf8');
    const frontmatter = /^\uFEFF?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text);
    assert.ok(frontmatter, 'Missing frontmatter: ' + id);
    assert.match(frontmatter[1], /^description:\s*\S/m, 'Missing description: ' + id);
  }
});
