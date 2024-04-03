/** @type {import('next').NextConfig} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    images: {
        remotePatterns: [
        {
            hostname: 'cdn.sanity.io',
        },
        {
            hostname: 'i.postimg.cc'
        }
    ]
    }
}