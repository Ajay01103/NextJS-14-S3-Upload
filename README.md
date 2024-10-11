This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, clone the repo [https://github.com/Ajay01103/NextJS-14-S3-Upload](https://github.com/Ajay01103/NextJS-14-S3-Upload)

```bash
npm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## AWS S3 Bucket Configuration

- Configure Bucket Policy in the bucket Permissions

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:DeleteObject"
            ],
            "Resource": "arn:aws:s3:::your-bucket/*"
        }
    ]
}
```

- Configure CORS Policy in Bucket Permissions

```
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "GET",
            "DELETE"
        ],
        "AllowedOrigins": [
            "http://localhost:3000"
        ],
        "ExposeHeaders": [],
        "MaxAgeSeconds": 3000
    }
]
```

- Keep the Block Public Access Disabled in very first stage of creating a s3 bucket

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

