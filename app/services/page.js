import React from 'react'
import Link from 'next/link'

function page() {
    return (
        <div>
            <h1>All Services</h1>
            <Link href="/services/appDevelopment">App Development</Link>
            <Link href="/services/webDevelopment">Web Development</Link>
            <Link href="/services/design">App/Web Design</Link>
            <Link href="/services/seo">SEO</Link>
        </div>
    )
}

export default page
