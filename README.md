# Request connection hang on AdGear API with form data.

This is a demo to illustrate this issue: https://github.com/request/request/issues/1544

# Try it!

```bash
> npm install
# Some awesome npm logs...

> webpack
# Transpile the file in the dist folder.

> AD_GEAR_USER=your_ad_gear_user AD_GEAR_PASSWORD=your_password npm run server
# Run the transpiled file.
```

You should see some logs and the final `Executing...` statement that shows that the request never resolves.

I hope this is useful to debug the library or to see which part of my implementation has the bug :)

Thank you!
