'use client';

import { MdOutlineCloudUpload } from 'react-icons/md';
import { useFileInput } from './Root';
import { formatBits } from '@/app/utils/formatByts';
import { IoIosLogOut, IoIosTrash } from 'react-icons/io';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Button } from '../../Button';
import { FileItem } from './FileItem';

export function FileList() {
  const { files } = useFileInput();

  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className='mt-4 space-y-3'>
      {files.map((file) => {
        return <FileItem key={file.name} name={file.name} size={file.size} />;
      })}
    </div>
  );
}
