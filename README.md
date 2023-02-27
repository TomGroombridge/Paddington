# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## Course JSON

below is an example of what a course JSON object can look like. 

```
[
  {
    "name": "Tax",
    "steps": [
      {
        "type": "ARTICLE",
        "title": "What is National Insurance?",
        "quiz_slug": null,
        "step_slug": "what-is-national-insurance-article",
        "video_url": null,
        "action_slug": null,
        "description": "Read the article on National Insurance",
        "article_slug": "how-can-i-budget-effectively-as-a-student",
        "document_url": null
      },
      {
        "type": "VIDEO",
        "title": "What is my tax code?",
        "quiz_slug": null,
        "step_slug": "what-is-my-tax-code-video",
        "video_url": "https://tom-teaches-videos.s3.eu-west-2.amazonaws.com/Elent/Videos/WS22_40w_Elent.mp4",
        "action_slug": null,
        "description": "Watch the video explaning the tax code and how you work out what your tax code is",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "QUIZ",
        "title": "Take the Tax Quiz",
        "quiz_slug": "test-quiz",
        "step_slug": "tax-quiz",
        "video_url": null,
        "action_slug": null,
        "description": "Take the quize to make sure you've understood the information so far",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "ACTION",
        "title": "Check my Tax code",
        "quiz_slug": null,
        "step_slug": "check-my-tax-code-action",
        "video_url": "https://tom-teaches-videos.s3.eu-west-2.amazonaws.com/Elent/Videos/WS22_40w_Elent.mp4",
        "action_slug": "check-my-tax-code",
        "description": "Let's check your tax code to make sure you're paying the right amount",
        "article_slug": "check-my-tax-code",
        "document_url": null
      },
      {
        "type": "DOCUMENT",
        "title": "Tax Infographic",
        "quiz_slug": null,
        "step_slug": "tax-information-document",
        "video_url": null,
        "action_slug": null,
        "description": "View a non-jargon Infographic on National Insurance",
        "article_slug": null,
        "document_url": "/stock/stock-document.png"
      }
    ]
  },
  {
    "name": "Your Payslip",
    "steps": [
      {
        "type": "ARTICLE",
        "title": "The breakdown of a Payslip",
        "quiz_slug": null,
        "step_slug": "the-breakdown-of-a-payslips",
        "video_url": null,
        "action_slug": null,
        "description": "Read or listen to the article on Payslips",
        "article_slug": "what-do-i-do-with-my-old-help-to-buy-isa",
        "document_url": null
      }
    ]
  },
  {
    "name": "Pensions",
    "steps": []
  },
  {
    "name": "Budgeting",
    "steps": []
  },
  {
    "name": "Debt",
    "steps": []
  }
]
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
