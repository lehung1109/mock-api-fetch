# Mock Fetch

Mock http request made using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Usage

### Include script file to your app

```js
<script src="/mock-api.js"></script>
```

### Create a mock

```js
window.mock({
  url: '/api/avatar',
  callback: (req) => {
    const method = req?.method;

    if (method && method.toLowerCase() !== 'get') {
      return {
        body: `Only allow GET method`
      }
    }

    return {
      body: [
        {
          name: "Peg Legge",
          image: {
            src: "/samples/peg-legge.svg",
            width: '175',
            height: '175',
            alt: 'people 1'
          },
          jobTitle: "CEO"
        },
        {
          name: "Richard Guerra",
          image: {
            src: "/samples/richard-guerra.svg",
            width: '175',
            height: '175',
            alt: 'people 2'
          },
          jobTitle: "CEO"
        },
        {
          name: "Alexandra Stolz",
          image: {
            src: "/samples/alexandra-stolz.svg",
            width: '175',
            height: '175',
            alt: 'people 3'
          },
          jobTitle: "CEO"
        },
        {
          name: "Janet Bray",
          image: {
            src: "/samples/janet-bray.svg",
            width: '175',
            height: '175',
            alt: 'people 4'
          },
          jobTitle: "CEO"
        },
      ]
    }
  }
  });
```

### Test a mock

```js
// expect data
fetch('/api/avatar').then(res => res.json()).then(console.log);
```

### The data will show like that in the console.log

```json
[
  {
    "name": "Peg Legge",
    "image": {
      "src": "/samples/peg-legge.svg",
      "width": "175",
      "height": "175",
      "alt": "people 1"
    },
    "jobTitle": "CEO"
  },
  {
    "name": "Richard Guerra",
    "image": {
      "src": "/samples/richard-guerra.svg",
      "width": "175",
      "height": "175",
      "alt": "people 2"
    },
    "jobTitle": "CEO"
  },
  {
    "name": "Alexandra Stolz",
    "image": {
      "src": "/samples/alexandra-stolz.svg",
      "width": "175",
      "height": "175",
      "alt": "people 3"
    },
    "jobTitle": "CEO"
  },
  {
    "name": "Janet Bray",
    "image": {
      "src": "/samples/janet-bray.svg",
      "width": "175",
      "height": "175",
      "alt": "people 4"
    },
    "jobTitle": "CEO"
  }
]
```

Have Fun!
