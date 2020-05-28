![Pointbreak](https://avatars0.githubusercontent.com/u/46719112?s=80&v=4)

We Want More
====

## ⚒️ Requirements

Below are the required tools which need to be installed before you can install and use the app. Go to each tool's
website and follow their install instructions.

- [Node JS](http://nodejs.org/) (v12.11.1 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/)

> 💡 This project is built with Gatsby. If you're new to Gatsby, feel free to check out their documentation on 
> [their website](https://www.gatsbyjs.org/).

## 🚀 Running locally

Navigate into the root and run:

```shell
gatsby develop
```

## 🚢 Deployment

Deployment of this project is entirely managed through Bitbucket Pipelines. You can track deployment history and changes 
through the [Deployment Dashboard](https://bitbucket.org/antwerpfactory/runnerslab-web-appointments/addon/pipelines/deployments#!/deployments).

### CI & Deployment configuration

#### Deployment environments & variables

We currently have 2 deployment environments available: `Staging` & `Production`. These environments can be managed 
through the [Repository settings > Deployments](https://bitbucket.org/antwerpfactory/runnerslab-web-appointments/admin/addon/admin/pipelines/deployment-settings).

Each environment requires the following deployment variables (which can be configured per environment in the Deployment
settings):

| Name | Purpose |
|:-----|:--------|
| SSH_USER | Name of the SSH user to use during deployment |
| HOST | IP address of the host you want to deploy to |
| HOST_PATH | Full path to the root directory of the project on the host |

These variables are used at deploy-time for each respective environment. 

##### Enable SSH connections between the host and Bitbucket Pipelines
In order for the host to accept an SSH connection from Bitbucket Pipelines during deployment, you'll have to add the 
public SSH key of this repo's Pipeline to the hosts authorized keys. This can be done in the [Repository settings > SSH keys](https://bitbucket.org/antwerpfactory/runnerslab-web-appointments/admin/addon/admin/pipelines/ssh-keys).

1. Either generate a new key, or use the existing one if you already created it.
2. Copy this public key to `~/.ssh/authorized_keys` on the remote host.
3. Add the host as a known host to the repository by entering the host IP address in the `Host address` field
4. Click `fetch` to get the host fingerprint.
5. Click `add` to add the known host.

At this stage, Bitbucket Pipelines should be able to open an SSH connection to the remote host.

#### Repository variables

We're using Bitbucket Repository variables to setup environment variables required to build and run the project in our 
CI pipeline. You can manage them in the [Repository setting > Repository variables](https://bitbucket.org/antwerpfactory/runnerslab-web-appointments/admin/addon/admin/pipelines/repository-variables).

> 💡 When adding new variables, please make sure to secure any tokens, passwords, ... or anything that should remain a 
> secret. If you need to be able to view its actually value later on, save it to our 1Password Vault.

Below is an overview of all required variables:

**Shared build-time variables**:

| Name |
|:-----|
| NODE_ENV |
| GATSBY_WEBPACK_PUBLICPATH | 
| GATSBY_PRISMIC_API_ENDPOINT |
| GATSBY_PRISMIC_ACCESTOKEN |


### Deploying to an environment

Our [bitbucket-pipelines.yml](/bitbucket-pipelines.yml) associates each Deployment environment to a specific branch:

| Environment | Branch |
|:------------|:-------|
| Production | master |
| Staging | staging |

The deployment process is identical for all environments. So whether you deploy to `Production` or `Staging` depend on 
the branch you're working on. The steps basically consist of:

1. Building the app.
2. Deploying the app build through `scp-deploy` (which is why we needed the SSH setup in [Deployment environments & variables](#deployment-environments--variables)).

There are to ways to deploy the project:

#### Manual deployment

To manually deploy to either `Production` or `Staging`, you can run the CI Pipeline for the according branch. To do so:
 
1. Head over to the [Pipeline overview](https://bitbucket.org/antwerpfactory/runnerslab-web-appointments/addon/pipelines/home#!/).
2. Click the `Run pipeline` button in the top right corner.

To deploy to `Production`, select:
- Branch: `master`
- Pipeline: `branches:master`

To deploy to `Staging`, select:
- Branch: `staging`
- Pipeline: `branches:staging`

#### Continuous deployment

Most of the time, deployments won't happen manually. Our pipeline is configured to automatically deploy to the 
appropriate environment when you either commit to or merge a PR on a branch.

So whenever something changes on the `staging` branch, our pipeline will deploy to the `Staging` environment. Whenever
something changes on `master`, our pipeline will deploy to the `Production` environment.
