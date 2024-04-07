import { CiUser } from 'react-icons/ci';
import { Input } from './components/Input';
import { SettingsTabs } from './components/SettingsTabs';
import { MdOutlineCloudUpload, MdOutlineEmail } from 'react-icons/md';

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
          <div className='grid-cols-form grid gap-3'>
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
          <div className='grid-cols-form grid gap-3 pt-5'>
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
          <div className='grid-cols-form grid gap-3 pt-5'>
            <label
              htmlFor='photo'
              className=' text-sm font-medium text-zinc-700'
            >
              Your photo
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                This will be displayed on your profile.
              </span>
            </label>
            <div className='flex items-start gap-5'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-violet-50'>
                <CiUser className='h-8 w-8 text-violet-500' />
              </div>
              <label
                htmlFor='photo'
                className='flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm'
              >
                <div className='border-6 rounded-full border-zinc-50 bg-zinc-100 p-2'>
                  <MdOutlineCloudUpload className='h-5 w-5 text-zinc-600' />
                </div>
                <div className='flex flex-col items-center gap-1'>
                  <span>Click to upload or drag and drop</span>
                  <span>SVG, PNG JPG or GIF (max. 800x400px)</span>
                </div>
              </label>
              <input type='file' className='sr-only' id='photo' />
            </div>
          </div>
          {/* role */}
          <div className='grid-cols-form grid gap-3 pt-5'>
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
          <div className='grid-cols-form grid gap-3 pt-5'>
            <label
              htmlFor='country'
              className='text-sm font-medium text-zinc-700'
            >
              Country
            </label>
            <div className='grid grid-cols-2 gap-6'></div>
          </div>
          {/* timezone */}
          <div className='grid-cols-form grid gap-3 pt-5'>
            <label
              htmlFor='timezone'
              className='text-sm font-medium text-zinc-700'
            >
              Timezone
            </label>
            <div className='grid grid-cols-2 gap-6'></div>
          </div>
          {/* bio */}
          <div className='grid-cols-form grid gap-3 pt-5'>
            <label htmlFor='bio' className=' text-sm font-medium text-zinc-700'>
              Bio
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Write a short instroduction.
              </span>
            </label>
          </div>
          {/* portifolio and projects */}
          <div className='grid-cols-form grid gap-3 pt-5'>
            <label
              htmlFor='project'
              className=' text-sm font-medium text-zinc-700'
            >
              Portifolio projects
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Share a few snippets of your work.
              </span>
            </label>
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
