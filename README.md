# AWS CDK in 15 Minutes: Supercharging your CloudFormation

> *This repository was created to support a talk I give at AWS Community Events*

Familiar with AWS CloudFormation but hesitant about diving into AWS CDK? 

In this 15-minute talk, I’ll show how simple and approachable CDK can be—even for those of us from a traditional infrastructure background. Transitioning to AWS CDK is a smooth process that lets you manage complex infrastructure as code, without the headaches of extensive YAML templates. All you need is a basic understanding of variables, conditional statements, and simple object-oriented programming.

We’ll compare several typical CloudFormation examples with their CDK counterparts, and tackle deployments that are notoriously difficult in CloudFormation.

## Examples

### 1. Simple S3 Bucket

Everyone has created an S3 bucket in CloudFormation at some point, so this is our starting point.

In the CloudFormation example, we see how extremely simple it is, while the CDK Example seems more complicated than it needs to be. This would be overkill, but the example is aimed at showing the similarities in syntax for the two approaches.

* [1-s3Bucket/cfn](1-s3Bucket/cfn/s3Bucket.yml)
* [1-s3Bucket/cdk](1-s3Bucket/cdk/lib/s3_bucket-stack.ts)

### 2. EC2 Instance with a VPC

VPC's and EC2 Instances are two of the most commonly deployed resources on AWS. However, they're also far more complex.

The CloudFormation balloons to a huge size at over 250 lines, and even in YAML, is hard to navigate. In constrast, CDK's ability to leverage [constructs](https://docs.aws.amazon.com/cdk/v2/guide/constructs.html) hugely simplifies the complexity of a VPC.

* [2-ec2AndVpc/cfn](2-ec2AndVpc/cfn/ec2AndVpc.yml)
* [2-ec2AndVpc/cdk](2-ec2AndVpc/cdk/lib/ec2_and_vpc-stack.ts)

### 3. Granting Access with Methods

CDK's imperative approach also lets us build upon our resources in very different ways. Building on our last example, let's add an S3 bucket, and grant the EC2 instance read-write access to it.

In CloudFormation, we need to add the `Policy`, `Role`, and `Profile`, while modifying the `Instance` as well. For CDK, we can use a one-line method to grant access which will create these same resources with much less overhead.

* [3-grantAccess/cfn](3-grantAccess/cfn/ec2AndVpcWithS3.yml)
* [3-grantAccess/cdk](3-grantAccess/cdk/lib/ec2_and_vpc_with_s3-stack.ts)

## Further Concepts

CDK has a huge range of capabilities, which we've only just touched on. The pitch of "writing IaC in a familiar language" sells CDK short; the real power is in it's flexibility.

If you've ever written CloudFormation and felt frustrated by how inflexible it is, **CDK is one of the answers**.

You can create entire stacks based on an `if` statement, or deploy dozens of EC2 instances based on running a `for` loop over a CSV, or even creating custom constructs to deploy consistent internal patterns. The options are endless, and if you're familiar with CloudFormation, CDK isn't as huge of leap as it first appears.

## Resources

Looking to learn more about CDK? Here's some of my recommendations:

### Getting Starts with the AWS CDK by AWS

The official documentation is a great starting point, covering everything from installing the CDK tooling, building your first app in CDK, and pointing out some of the deeper concepts. Highly recommended.

[🧑‍💻 Getting Started with the AWS CDK by AWS](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

### AWS CDK Crash Course by Matt Martz (FreeCodeCamp)

Prefer video-based learning? AWS Community Builder Matt Martz put together a great video course with FreeCodeCamp, going into way more detail than my 15-minute talk. Check it out!

[🎥 AWS Cloud Development Kit (CDK) Crash Course (YouTube)](https://www.youtube.com/watch?v=T-H4nJQyMig)

### The CDK Book by Bhat, Bonig, Coulter, Hoeger

Going deep into CDK? There's a literal book. Written by four AWS Heroes, this book goes deep not just into CDK itself, but using it in an enterprise production context and integrating it into your DevOps strategy.

[📚 The CDK Book - A Comprehensive Guide to the AWS Cloud Development Kit](https://thecdkbook.com/)

## License

The contents of this repository are made available under the [MIT License](LICENSE).
