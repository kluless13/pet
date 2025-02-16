import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ClipboardList, User } from 'lucide-react';

export default function AdopterNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 p-2 rounded-lg w-64 flex justify-around shadow-lg ring-4 ring-blue-500">
      <Link href="/adopter" passHref>
        <Button variant="ghost" className="text-white">
          <Home className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/adopter/applications" passHref>
        <Button variant="ghost" className="text-white">
          <ClipboardList className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/adopter/profile" passHref>
        <Button variant="ghost" className="text-white">
          <User className="h-6 w-6" />
        </Button>
      </Link>
    </nav>
  );
}
