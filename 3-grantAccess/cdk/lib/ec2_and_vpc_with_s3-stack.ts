import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class Ec2AndVpcWithS3Stack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = new ec2.Vpc(this, 'Vpc', {
            ipAddresses: ec2.IpAddresses.cidr('10.192.0.0/16'),
            maxAzs: 3,
            natGateways: 1,
        });

        const ec2Instance = new ec2.Instance(this, 'Instance', {
            vpc: vpc,
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
            machineImage: ec2.MachineImage.latestAmazonLinux2023(),
            keyPair: ec2.KeyPair.fromKeyPairName(this, 'KeyPair', 'my-key-pair'),
        });

        ec2Instance.connections.allowFromAnyIpv4(ec2.Port.tcp(22));

        const bucket = new s3.Bucket(this, 'Bucket', {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });

        bucket.grantReadWrite(ec2Instance);
    }
}
