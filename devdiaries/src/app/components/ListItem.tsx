import React from 'react'
import Link from "next/link"
import getFormatDate from "../../../lib/getFormatDate"

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {

    const { id, title , date} = post
    const formattedDate = getFormatDate(date)

    return (
        <li className="mt-1 ">
            <Link className="font-semibold md:text-2xl xxsm:text-xl blog-topic" href={`/posts/${id}`}>{title}</Link>
            <h5 className='mt-1 text-xl font-semibold'>Published on: {date}</h5>
            <br />
            {/* <p className="mt-1 text-sm">{formattedDate}</p> */}
        </li>
    )
}