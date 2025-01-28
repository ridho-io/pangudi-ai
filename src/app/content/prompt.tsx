import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowBigUpDash, Send } from 'lucide-react';


export default function Page() {
    return (
    <div className='flex w-full max-w-3xl fixed bottom-3 items-center z-50'>
        <Textarea placeholder="Type your message here." className='rounded-3xl px-5 py-3' />
        <Button className="-ms-14 btn- hover:bg-indigo-400 text-white font-bold py-4 px-2 rounded-sm scale-125">
        <Send size={36} />
        </Button>
    </div>
    )
}