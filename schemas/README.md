# Rally Study 01 Data Schema

This schema directory has two relevant components:

1. a script that generates the final schema, `generate-schema.mjs`. To generate the schema, run `npm run build:schema`.
2. the last-generated schema, `meaasurements.1.schema.json`.

We've separated the schema construction from the output in case wee change the structure and need to output a more complex schema.