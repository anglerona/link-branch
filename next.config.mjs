/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '*.googleusercontent.com'
            },
            {
                hostname: 'link-branch.s3.amazonaws.com'
            }
        ]
    }
};

export default nextConfig;
