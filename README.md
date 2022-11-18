# Vercel Test

A project made to test drive vercel's serverless and edge functions

## API

| Endpoint               | Params          | Type                | Language   | Example calls                                                                    |
| ---------------------- | --------------- | ------------------- | ---------- | -------------------------------------------------------------------------------- |
| `/api/golang`          | name (optional) | Serverless function | Go         | `[baseUrl]/api/golang`<br />`[baseUrl]/api/golang?name=Dennis`                   |
| `/api/typescript`      | name (optional) | Serverless function | TypeScript | `[baseUrl]/api/typescript`<br />`[baseUrl]/api/typescript?name=Dennis`           |
| `/api/typescript/edge` | name (optional) | Edge function       | TypeScript | `[baseUrl]/api/typescript/edge`<br />`[baseUrl]/api/typescript/edge?name=Dennis` |
