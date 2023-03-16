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
    "name": "Payslips",
    "steps": [
      {
        "type": "VIDEO",
        "title": "Understanding your payslip",
        "quiz_slug": null,
        "step_slug": "understanding-payslip-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Understanding+your+Payslip.mp4",
        "action_slug": null,
        "description": "Watch the video explaning your payslip",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "CHAT",
        "title": "Tax codes chat",
        "quiz_slug": null,
        "step_slug": "about-tax-codes-whatsapp",
        "video_url": null,
        "action_slug": null,
        "description": "Read the whatsapp chat between Elent and a member about tax codes",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/WhatsApps/PayslipTaxCodeWhatsappChat.pdf"
      },
      {
        "type": "VIDEO",
        "title": "Tax Codes",
        "quiz_slug": null,
        "step_slug": "understanding-tax-codes-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Checking+your+tax+code.mp4",
        "action_slug": null,
        "description": "Watch the video explaning the different tax codes",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "ACTION",
        "title": "Check my Tax code",
        "quiz_slug": null,
        "step_slug": "check-my-tax-code-action",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Understanding+your+Payslip.mp4",
        "action_slug": "check-my-tax-code",
        "description": "Let's check your tax code to make sure you're paying the right amount",
        "article_slug": "check-my-tax-code",
        "document_url": null
      },
      {
        "type": "DOCUMENT",
        "title": "jargon busting payslip sheet",
        "quiz_slug": null,
        "step_slug": "jargon-busting-payslip-infographic",
        "video_url": null,
        "action_slug": null,
        "description": "Read this helpful jargon busting paylip cheatsheet",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Infographics/Payslip_infographic.pdf"
      },
      {
        "type": "DOCUMENT",
        "title": "student loan deductions sheet",
        "quiz_slug": null,
        "step_slug": "student-loan-deductions-infographic",
        "video_url": null,
        "action_slug": null,
        "description": "Got a student loan? this inforgraphic will help you decypher your deductions on your payslip",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Infographics/Student+Loans+Infographic.pdf"
      },
      {
        "type": "ARTICLE",
        "title": "The nice and not nice deductions",
        "quiz_slug": null,
        "step_slug": "what-is-national-insurance-article",
        "video_url": null,
        "action_slug": null,
        "description": "Read the article on National Insurance",
        "article_slug": "the-nice-and-not-nice-deductions",
        "document_url": null
      },
      {
        "type": "QUIZ",
        "title": "Take the Tax Quiz",
        "quiz_slug": "personal-finance-payslip-quiz",
        "step_slug": "payslip-quiz",
        "video_url": null,
        "action_slug": null,
        "description": "Take the quize to make sure you've understood the information so far",
        "article_slug": null,
        "document_url": null
      }
    ]
  },
  {
    "name": "Pensions",
    "steps": [
      {
        "type": "VIDEO",
        "title": "Intro to Pensions",
        "quiz_slug": null,
        "step_slug": "state-and-workplace-pensions-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Introduction+to+Pensions.mp4",
        "action_slug": null,
        "description": "Watch the video explaning state and Workplace Pensions",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "CHAT",
        "title": "Workplace Pensions chat",
        "quiz_slug": null,
        "step_slug": "workplace-pension-whatsapp",
        "video_url": null,
        "action_slug": null,
        "description": "Read the whatsapp chat between Elent and a member about Workplace Pensions",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/WhatsApps/WorkplacePensionsWhatsappChat.pdf"
      },
      {
        "type": "VIDEO",
        "title": "Checking your Pensions",
        "quiz_slug": null,
        "step_slug": "checking-your-workplace-pensions-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Check+your+Pensions.mp4",
        "action_slug": null,
        "description": "Watch the video to help you understand how to find and understand your Workplace Pensions",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "ACTION",
        "title": "Check your previous Pension numbers",
        "quiz_slug": null,
        "step_slug": "check-previous-pension-numbers-action",
        "video_url": "https://tom-teaches-videos.s3.eu-west-2.amazonaws.com/Elent/Videos/WS22_40w_Elent.mp4",
        "action_slug": "check-previous-pension-numbers",
        "description": "Let's check your previous Pension numbers",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "VIDEO",
        "title": "National Insurance Contributions",
        "quiz_slug": null,
        "step_slug": "checking-your-national-insurance-contributions-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Check+National+Insurance+Contributions.mp4",
        "action_slug": null,
        "description": "Watch the video to help you understand the action below on National Insurance Contributions",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "ACTION",
        "title": "Check State Pension",
        "quiz_slug": null,
        "step_slug": "check-years-left-on-state-pension-action",
        "video_url": "https://tom-teaches-videos.s3.eu-west-2.amazonaws.com/Elent/Videos/WS22_40w_Elent.mp4",
        "action_slug": "check-years-left-on-state-pension",
        "description": "Let's see how many years you have left on your Pension",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "DOCUMENT",
        "title": "Pension stats and numbers",
        "quiz_slug": null,
        "step_slug": "pensions-stats-infographic",
        "video_url": null,
        "action_slug": null,
        "description": "Helpful stats about your pensions",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Infographics/Pension+Eligibility+Rules.pdf"
      },
      {
        "type": "ARTICLE",
        "title": "What happens to your money in a Pension?",
        "quiz_slug": null,
        "step_slug": "what-happens-to-your-money-in-a-pension-article",
        "video_url": null,
        "action_slug": null,
        "description": "Read the article on what happens in a Pension",
        "article_slug": "what-happens-to-your-money-in-a-pension",
        "document_url": null
      },
      {
        "type": "QUIZ",
        "title": "Take the Pensions Quiz",
        "quiz_slug": "personal-finance-pensions-quiz",
        "step_slug": "pensions-quiz",
        "video_url": null,
        "action_slug": null,
        "description": "Take the quize to make sure you've understood the information so far",
        "article_slug": null,
        "document_url": null
      }
    ]
  },
  {
    "name": "Budgeting",
    "steps": [
      {
        "type": "VIDEO",
        "title": "Money mindset and budgeting rules",
        "quiz_slug": null,
        "step_slug": "money-mindset-and-budgeting-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Introduction+to+Budgeting.mp4",
        "action_slug": null,
        "description": "Watch the video explaining budgeting",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "CHAT",
        "title": "Impulse spending chat",
        "quiz_slug": null,
        "step_slug": "impulse-spending-whatsapp",
        "video_url": null,
        "action_slug": null,
        "description": "Read the whatsapp chat between Elent and a member about impulse spending",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/WhatsApps/BudgetingSupportWhatsappChat.pdf"
      },
      {
        "type": "DOCUMENT",
        "title": "Types of budgeting rules",
        "quiz_slug": null,
        "step_slug": "budgeting-rules-infographic",
        "video_url": null,
        "action_slug": null,
        "description": "Helpful infographic on the different budgeting rules",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Infographics/Budgeting+Rules.pdf"
      },
      {
        "type": "VIDEO",
        "title": "Applying Budgeting rules",
        "quiz_slug": null,
        "step_slug": "budgeting-goals-and-rules-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Set+a+Budgeting+Rule.mp4",
        "action_slug": null,
        "description": "Watch the video to help you understand the action below on Budgeting",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "ACTION",
        "title": "Setting a bugeting goal",
        "quiz_slug": null,
        "step_slug": "budgeting-goals-action",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Set+a+Budgeting+Rule.mp4",
        "action_slug": "write-bugdeting-goals",
        "description": "Think of a budgeting goal and use one of the rules we have spoken about to help you set your budget.",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "QUIZ",
        "title": "Take the Budgeting Quiz",
        "quiz_slug": "personal-finance-budgeting-quiz",
        "step_slug": "budgeting-quiz",
        "video_url": null,
        "action_slug": null,
        "description": "Take the quize to make sure you've understood the information so far",
        "article_slug": null,
        "document_url": null
      }
    ]
  },
  {
    "name": "Saving",
    "steps": [
      {
        "type": "VIDEO",
        "title": "Where can you save your money and how to set it up",
        "quiz_slug": null,
        "step_slug": "where-to-save-your-money-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Introduction+to+Savings.mp4",
        "action_slug": null,
        "description": "Watch the video explaining where and how to save your money",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "CHAT",
        "title": "Whatsapp chat - How much should I save?",
        "quiz_slug": null,
        "step_slug": "how-much-should-i-save-whatsapp",
        "video_url": null,
        "action_slug": null,
        "description": "Read the whatsapp chat between Elent and a member about saving",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/WhatsApps/SavingsSupportWhatsappChat.pdf"
      },
      {
        "type": "DOCUMENT",
        "title": "Saving for your first home",
        "quiz_slug": null,
        "step_slug": "saving-for-first-home-infographic",
        "video_url": null,
        "action_slug": null,
        "description": "Helpful infographic on saving for your first home",
        "article_slug": "null",
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Infographics/Saving+For+Your+First+Home.pdf"
      },
      {
        "type": "VIDEO",
        "title": "What is compound interest?",
        "quiz_slug": null,
        "step_slug": "what-is-compound-interest-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Compound+Interest.mp4",
        "action_slug": null,
        "description": "Watch the video explaining compound interest",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "ARTICLE",
        "title": "ISAs 101",
        "quiz_slug": null,
        "step_slug": "everything-you-need-to-know-about-isas-article",
        "video_url": null,
        "action_slug": null,
        "description": "Read the article on bad habits when saving and how to avoid them",
        "article_slug": "everything-you-need-to-know-about-isas",
        "document_url": null
      },
      {
        "type": "QUIZ",
        "title": "Take the Savings Quiz",
        "quiz_slug": "personal-finance-savings-quiz",
        "step_slug": "savings-quiz",
        "video_url": null,
        "action_slug": null,
        "description": "Take the quize to make sure you've understood the information so far",
        "article_slug": null,
        "document_url": null
      }
    ]
  },
  {
    "name": "Investing",
    "steps": [
      {
        "type": "VIDEO",
        "title": "Intro to Investing",
        "quiz_slug": null,
        "step_slug": "what-is-investing-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Intro+to+investing.mp4",
        "action_slug": null,
        "description": "Watch the video explaining investing",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "ARTICLE",
        "title": "What are new investments?",
        "quiz_slug": null,
        "step_slug": "new-investments-crypto-nft-article",
        "video_url": null,
        "action_slug": null,
        "description": "Read the article new investments like crypto and NFTs",
        "article_slug": "how-can-i-budget-effectively-as-a-student",
        "document_url": null
      },
      {
        "type": "CHAT",
        "title": "Whatsapp chat - Taxes you need to pay on investing",
        "quiz_slug": null,
        "step_slug": "taxes-to-pay-on-investing-whatsapp",
        "video_url": null,
        "action_slug": null,
        "description": "Read the whatsapp chat between Elent and a member about taxes on investing",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/WhatsApps/InvestingSupportWhatsappChat.pdf"
      },
      {
        "type": "DOCUMENT",
        "title": "Long term investing Strategies",
        "quiz_slug": null,
        "step_slug": "strategies-for-long-term-investing-infographic",
        "video_url": null,
        "action_slug": null,
        "description": "Helpful infographic on investing and the different strategies",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Infographics/Long+Term+Investing+Strategies.pdf"
      },
      {
        "type": "QUIZ",
        "title": "Take the Investing Quiz",
        "quiz_slug": "personal-finance-investing-quiz",
        "step_slug": "investing-personal-finance-investing-quiz",
        "video_url": null,
        "action_slug": null,
        "description": "Take the quize to make sure you've understood the information so far",
        "article_slug": null,
        "document_url": null
      }
    ]
  },
  {
    "name": "Financial Footprint",
    "steps": [
      {
        "type": "VIDEO",
        "title": "Intro to Financial Footprint",
        "quiz_slug": null,
        "step_slug": "what-are-credit-files-and-scores-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/Intro+to+Financial+Footprint.mp4",
        "action_slug": null,
        "description": "Watch the video explaining your financial footprint",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "VIDEO",
        "title": "Checking your credit scores",
        "quiz_slug": null,
        "step_slug": "checking-your-credt-scores-video",
        "video_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Videos/CheckCreditScoresAction.mp4",
        "action_slug": null,
        "description": "Watch the video about the credit scores action ",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "ACTION",
        "title": "Find your credit rating scores",
        "quiz_slug": null,
        "step_slug": "credit-ratings-scores-search-action",
        "video_url": "https://tom-teaches-videos.s3.eu-west-2.amazonaws.com/Elent/Videos/WS22_40w_Elent.mp4",
        "action_slug": "credit-ratings-scores-search",
        "description": "Find all three credit rating agency scores and write them down",
        "article_slug": null,
        "document_url": null
      },
      {
        "type": "ARTICLE",
        "title": "What impacts your scores?",
        "quiz_slug": null,
        "step_slug": "what-impacts-credit-scores-article",
        "video_url": null,
        "action_slug": null,
        "description": "What can be boosting and harming your scores?",
        "article_slug": "how-can-i-budget-effectively-as-a-student",
        "document_url": null
      },
      {
        "type": "CHAT",
        "title": "What to do if something is wrong",
        "quiz_slug": null,
        "step_slug": "what-to-do-if-credit-score-is-wrong-whatsapp",
        "video_url": null,
        "action_slug": null,
        "description": "Read the whatsapp chat between Elent and a member about what to do if there is something wrong with your credit scores",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/WhatsApps/FinancialFootprintWhatsappChat.pdf"
      },
      {
        "type": "DOCUMENT",
        "title": "Your Ethical Footprint",
        "quiz_slug": null,
        "step_slug": "ethical-footpriny-infographic",
        "video_url": null,
        "action_slug": null,
        "description": "Helpful infographic on your ethical fooprint",
        "article_slug": null,
        "document_url": "https://elent-media.s3.eu-west-2.amazonaws.com/Infographics/Ethical+Footprint+Infographic.pdf"
      },
      {
        "type": "QUIZ",
        "title": "Take the Financial Footprint Quiz",
        "quiz_slug": "personal-finance-financial-footprint-quiz",
        "step_slug": "financial-footprint-quiz",
        "video_url": null,
        "action_slug": null,
        "description": "Take the quize to make sure you've understood the information so far",
        "article_slug": null,
        "document_url": null
      }
    ]
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
