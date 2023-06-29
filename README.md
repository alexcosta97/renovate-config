# renovate-config

Renovate Config for my projects

## Usage

### Non-JavaScript Projects (or JavsScript with separate `renovate.json`)

Add `renovate.json` with:

```json
{
  "extends": ["github>alexcosta97/renovate-config"]
}
```

### JavaScript Projects

In `package.json`, add:

```json
{
  "renovate": {
    "extends": ["github>alexcosta97/renovate-config"]
  }
}
```

## License

All code released under [MIT]

[mit]: https://github.com/alexcosta97/renovate-config/blob/master/LICENSE