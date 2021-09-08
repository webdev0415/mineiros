<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-10 mt-20">
    <!-- CARD -->
    <div
      v-for="(card, index) in catalogue"
      :key="index"
      class="
        transform
        hover:scale-105
        transition-all
        ease-in-out
        duration-500
        text-center
        mb-10
      "
    >
      <a
        :href="card.link"
        :target="card.link.startsWith('#') ? '' : '_blank'"
        rel="noopener noreferrer"
      >
        <div
          class="
            flex
            bg-white
            p-12
            rounded-lg
            shadow-md
            space-x-6
            catalogue-cards-info
            w-7/12
            justify-center
            mx-auto
            mb-7
          "
          :class="card.title.includes('PREVIEW') ? 'bg-gray-100' : ''"
        >
          <img
            class="h-20 w-20"
            :src="
              require(`~/assets/img/catalogue/${card.img || card.category.img}`)
            "
            :alt="card.title"
          />
        </div>
        <div class="wrap-descriptions">
          <div class="flex-row w-full">
            <h3 class="text-lg font-bold ubuntu-700">{{ card.title }}</h3>
            <p class="text-base mt-2 md:h-20 ubuntu-300">
              {{ card.description }}
            </p>
            <div class="flex justify-center mt-2">
              <img
                class="h-8 w-10"
                :src="require(`~/assets/img/catalogue/${card.category.img}`)"
                :alt="card.category"
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    interface Category {
      img: string
    }

    interface CategoryMap {
      [name: string]: Category
    }

    const categories: CategoryMap = {
      aws: { img: 'aws.svg' },
      github: { img: 'github-word.svg' },
    }

    interface CatalogueModule {
      title: string
      description: string
      img?: string
      link: string
      category: Category
    }

    const catalogue: CatalogueModule[] = [
      {
        title: 'AWS / S3 Bucket',
        description:
          'A Terraform module to create a Simple Storage Service (S3) Bucket on Amazon Web Services (AWS).',
        link: 'https://registry.terraform.io/modules/mineiros-io/s3-bucket/aws/latest',
        img: 'amazon-s3.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / ECR',
        description:
          'A Terraform module to create an Elastic Container Registry (ECR) on Amazon Web Services (AWS).',
        link: 'https://registry.terraform.io/modules/mineiros-io/ecr/aws/latest',
        img: 'amazon-ecr.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / Route53',
        description:
          'A Terraform module to create a Route53 Domain Name System (DNS) on Amazon Web Services (AWS).',
        link: 'https://registry.terraform.io/modules/mineiros-io/route53/aws/latest',
        img: 'amazon-route-53.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / VPC',
        description:
          'A Terraform module to create a Virtual Private Cloud (VPC) on Amazon Web Services (AWS).',
        link: 'https://registry.terraform.io/modules/mineiros-io/vpc/aws/latest',
        img: 'amazon-vpc.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / IAM Role',
        description:
          ' Terraform module to create an Identity and Access Management (IAM) Role on Amazon Web Services (AWS).',
        link: 'https://registry.terraform.io/modules/mineiros-io/iam-role/aws/latest',
        img: 'iam-role.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / IAM Policy',
        description:
          'A Terraform module to create an Identity and Access Management (IAM) Policy on Amazon Web Services (AWS).',
        link: 'https://registry.terraform.io/modules/mineiros-io/iam-policy/aws/latest',
        img: 'iam-permissions.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / IAM User',
        description:
          'A Terraform module to create and manage Identity and Access Management (IAM) Users on Amazon Web Services (AWS).',
        link: 'https://registry.terraform.io/modules/mineiros-io/iam-user/aws/latest',
        img: 'iam.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / IAM Group',
        description:
          'A Terraform module to create and manage an Identity and Access Management (IAM) Group on Amazon Web Services (AWS)',
        link: 'https://registry.terraform.io/modules/mineiros-io/iam-group/aws/latest',
        img: 'user-group.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / DynamoDB',
        description:
          'A Terraform module to create and manage DynamoDB on Amazon Web Services (AWS).',
        link: 'https://registry.terraform.io/modules/mineiros-io/dynamodb/aws/latest',
        img: 'aws-dynamodb.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / Lambda Function',
        description:
          'A Terraform module for deploying and managing Lambda functions on Amazon Web Services (AWS).',
        link: 'https://registry.terraform.io/modules/mineiros-io/lambda-function/aws/latest',
        img: 'lambda-function.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / Cognito User Pool',
        description:
          'A Terraform module to create and manage Cognito User Pools (Simple and Secure User Sign-Up, Sign-In, and Access Control) on Amazon Web Services (AWS).',
        link: 'https://registry.terraform.io/modules/mineiros-io/cognito-user-pool/aws/latest',
        img: 'amazon-cognito.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / EC2 Instance (PREVIEW)',
        description:
          'A Terraform module to create and manage simple EC2 Instances (Elastic Compute Cloud) on Amazon Web Services (AWS).',
        link: '#pricing',
        img: 'ec2-instance.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / Security Group (PREVIEW)',
        description:
          'A Terraform module to create and manage Security Groups on Amazon Web Services (AWS).',
        link: '#pricing',
        img: 'security-group.svg',
        category: categories.aws,
      },
      // {
      //   title: 'AWS / EC2 (PREVIEW)',
      //   description:
      //     'A Terraform service module to create and manage EC2 Instances including cloudinit-configurations, security groups and instance profile.',
      //   link: '#pricing',
      //   img: 'ec2-instance.svg',
      //   category: categories.aws,
      // },
      {
        title: 'AWS / EIP (PREVIEW)',
        description:
          'A Terraform module to create and mange Elastic IP Addresses (EIP) on Amazon Web Services (AWS).',
        link: '#pricing',
        img: 'eip.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / Organizations (PREVIEW)',
        description:
          'A Terraform module to create and manage AWS Organizations on Amazon Web Services (AWS).',
        link: '#pricing',
        img: 'aws-organizations.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / IAM Account (PREVIEW)',
        description:
          'A Terraform module to manage account alias and password policies (CIS compliant) on Amazon Web Services (AWS).',
        link: '#pricing',
        category: categories.aws,
        img: 'account.svg',
      },
      {
        title: 'AWS / SES (PREVIEW)',
        description:
          'A Terraform module to create and manage SES (Simple Email Service) on Amazon Web Services (AWS).',
        link: '#pricing',
        category: categories.aws,
        img: 'ses.svg',
      },
      {
        title: 'AWS / Cloudfront (PREVIEW)',
        description:
          'A Terraform module to create and manage aCloudfront Distribution (CDN) on Amazon Web Services (AWS).',
        link: '#pricing',
        img: 'cloudfront.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / ACM (PREVIEW)',
        description:
          'A Terraform module to create an AWS Certificate Manager (ACM) on Amazon Web Services (AWS).',
        link: '#pricing',
        img: 'acm.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / EKS Cluster (PREVIEW)',
        description:
          'A Terraform module to create and manage an EKS Cluster (Kubernetes) on Amazon Web Services (AWS).',
        link: '#pricing',
        img: 'eks.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / EKS Node Groups (PREVIEW)',
        description:
          'A Terraform module to create and manage EKS Node Groups for EKS (Kubernetes) on Amazon Web Services (AWS).',
        link: '#pricing',
        img: 'eks.svg',
        category: categories.aws,
      },
      {
        title: 'AWS / Elasticsearch Domain (PREVIEW)',
        description:
          'A Terraform module to create and manage Elasticsearch Clusters (ES) on Amazon Web Services (AWS).',
        link: '#pricing',
        img: 'es.svg',
        category: categories.aws,
      },
      // {
      //   title: 'AWS / EKS (PREVIEW)',
      //   description:
      //     'A Terraform service module to create and manage a full EKS Cluster and Node Groups (Kubernetes) including VPC, Access Control and more.',
      //   link: '#pricing',
      //   img: 'eks.svg',
      //   category: categories.aws,
      // },
      {
        title: 'AWS / Landingzone (PREVIEW)',
        description:
          'A Set of Terraform modules to manage a Landingzone on Amazon Web Services (AWS).',
        link: '/solutions/landing-zone',
        img: 'landingzone.svg',
        category: categories.aws,
      },
      {
        title: 'GitHub / Repository',
        description: 'A Terraform module to manage GitHub Repositories.',
        link: 'https://registry.terraform.io/modules/mineiros-io/repository/github/latest',
        img: 'github.svg',
        category: categories.github,
      },
      {
        title: 'GitHub / Organization',
        description: 'A Terraform module to manage GitHub Organizations.',
        link: 'https://registry.terraform.io/modules/mineiros-io/organization/github/latest',
        img: 'github.svg',
        category: categories.github,
      },
      {
        title: 'GitHub / Team',
        description: 'A Terraform module to manage GitHub Teams.',
        link: 'https://registry.terraform.io/modules/mineiros-io/team/github/latest',
        img: 'github.svg',
        category: categories.github,
      },
    ]

    return {
      catalogue,
    }
  },
})
</script>
