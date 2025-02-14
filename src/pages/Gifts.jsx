import config from '@/config/config';
import { motion } from 'framer-motion'
import {
    Copy,
    Gift,
    CreditCard,
    CheckCircle,
    Wallet,
    Building2,
} from 'lucide-react'
import { useState } from 'react';

export default function Gifts() {
    const [copiedAccount, setCopiedAccount] = useState(null);
    const copyToClipboard = (text, bank) => {
        navigator.clipboard.writeText(text);
        setCopiedAccount(bank);
        setTimeout(() => setCopiedAccount(null), 2000);
    };
    return (<>
        <section id="gifts" >
           
        </section>
    </>)
}
