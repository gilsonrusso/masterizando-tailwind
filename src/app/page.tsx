import { Input } from './components/Input';
import { SettingsTabs } from './components/SettingsTabs';
import { MdOutlineEmail } from 'react-icons/md';
import { FileInput } from './components/Form/FileInput';
import { Select } from './components/Form/Select';
import { SelectItem } from './components/Form/Select/SelectItem';
import { BiBold, BiItalic, BiLink, BiListUl } from 'react-icons/bi';
import { RiListOrdered } from 'react-icons/ri';
import { Textarea } from './components/Form/TextArea';

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-medium text-zinc-900'>Settings</h1>
      <SettingsTabs />
      <div className='mt-6 flex flex-col'>
        <div className='flex items-center justify-between border-b  border-zinc-200 pb-5'>
          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-500'>Personal info</h2>
            <span className='text-sm text-zinc-500'>
              Update your photo and personal details here.
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='rounded-lg border border-e-zinc-300 px-4 py-4 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50'
            >
              Cancel
            </button>
            <button
              type='submit'
              form='settings'
              className='rounded-lg bg-violet-600 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-violet-700'
            >
              Save
            </button>
          </div>
        </div>
        <form
          id='settings'
          action=''
          className='mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200'
        >
          {/* Name */}
          <div className='grid grid-cols-form gap-3'>
            <label
              htmlFor='firstName'
              className='text-sm font-medium text-zinc-700'
            >
              Name
            </label>
            <div className='grid grid-cols-2 gap-6'>
              <Input.Root>
                <Input.Control id='firstName' defaultValue='Gilson' />
              </Input.Root>
              <Input.Root>
                <Input.Control id='lastName' defaultValue='Russo' />
              </Input.Root>
            </div>
          </div>
          {/* email */}
          <div className='grid grid-cols-form gap-3 pt-5'>
            <label
              htmlFor='email'
              className='text-sm font-medium text-zinc-700'
            >
              Email address
            </label>
            <div className='grid grid-cols-2 gap-6'>
              <Input.Root>
                <Input.Prefix>
                  <MdOutlineEmail className='h-5 w-5 text-zinc-500' />
                </Input.Prefix>
                <Input.Control
                  id='email'
                  type='email'
                  defaultValue='gilsonrusso@outlook.com'
                />
              </Input.Root>
            </div>
          </div>
          {/* photo */}
          <div className='grid grid-cols-form gap-3 pt-5'>
            <label
              htmlFor='photo'
              className=' text-sm font-medium text-zinc-700'
            >
              Your photo
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                This will be displayed on your profile.
              </span>
            </label>
            <div>
              <FileInput.Root className='flex items-start gap-5'>
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>
          {/* role */}
          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='role' className='text-sm font-medium text-zinc-700'>
              Role
            </label>
            <div className='grid grid-cols-2 gap-6'>
              <Input.Root>
                <Input.Control id='role' defaultValue='Developer' />
              </Input.Root>
            </div>
          </div>
          {/* country */}
          <div className='grid grid-cols-form gap-3 pt-5'>
            <label
              htmlFor='country'
              className='text-sm font-medium text-zinc-700'
            >
              Country
            </label>
            <div className='grid grid-cols-2 gap-6'>
              <Select placeholder='Select a country'>
                <SelectItem value='br' text='Brazil' />
                <SelectItem value='us' text='United State' />
              </Select>
            </div>
          </div>
          {/* timezone */}
          <div className='grid grid-cols-form gap-3 pt-5'>
            <label
              htmlFor='timezone'
              className='text-sm font-medium text-zinc-700'
            >
              Timezone
            </label>
            <div className='grid grid-cols-2 gap-6'>
              <Select placeholder='Select a timezone'>
                <SelectItem
                  value='utc-8'
                  text='Pacific Standard Time (UTC-08:00'
                />
              </Select>
            </div>
          </div>
          {/* bio */}
          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='bio' className=' text-sm font-medium text-zinc-700'>
              Bio
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Write a short instroduction.
              </span>
            </label>
            <div className='space-y-3'>
              <div className='grid grid-cols-2 gap-3'>
                <Select placeholder='' defaultValue='normal'>
                  <SelectItem
                    defaultChecked
                    value='normal'
                    text='Normal text'
                  />
                  <SelectItem value='md' text='Marckdown' />
                </Select>

                <div className='flex items-center gap-1'>
                  <button
                    type='button'
                    className='rounded-md p-2 hover:bg-zinc-50'
                  >
                    <BiBold className='h-4 w-4 text-zinc-500' />
                  </button>
                  <button
                    type='button'
                    className='rounded-md p-2 hover:bg-zinc-50'
                  >
                    <BiItalic className='h-4 w-4 text-zinc-500' />
                  </button>
                  <button
                    type='button'
                    className='rounded-md p-2 hover:bg-zinc-50'
                  >
                    <BiLink className='h-4 w-4 text-zinc-500' />
                  </button>
                  <button
                    type='button'
                    className='rounded-md p-2 hover:bg-zinc-50'
                  >
                    <BiListUl className='h-4 w-4 text-zinc-500' />
                  </button>
                  <button
                    type='button'
                    className='rounded-md p-2 hover:bg-zinc-50'
                  >
                    <RiListOrdered className='h-4 w-4 text-zinc-500' />
                  </button>
                </div>
              </div>
              <Textarea
                id='bio'
                defaultValue="I'm Product design based in ..."
              ></Textarea>
            </div>
          </div>
          {/* portifolio and projects */}
          <div className='grid grid-cols-form gap-3 pt-5'>
            <label
              htmlFor='project'
              className=' text-sm font-medium text-zinc-700'
            >
              Portifolio projects
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          <div className='flex items-center justify-end gap-2 pt-5'>
            <button
              type='button'
              className='rounded-lg border border-e-zinc-300 px-4 py-4 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-lg bg-violet-600 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-violet-700'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
