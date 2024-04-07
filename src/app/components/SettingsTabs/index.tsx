'use client';
import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
import { useState } from 'react';

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('tab_1');

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200'>
        <TabItem
          value='tab_1'
          title='My details'
          isSelected={currentTab === 'tab_1'}
        />
        <TabItem
          value='tab_2'
          title='Profile'
          isSelected={currentTab === 'tab_2'}
        />
        <TabItem
          value='tab_3'
          title='Password'
          isSelected={currentTab === 'tab_3'}
        />
        <TabItem
          value='tab_4'
          title='Team'
          isSelected={currentTab === 'tab_4'}
        />
        <TabItem
          value='tab_5'
          title='Plan'
          isSelected={currentTab === 'tab_5'}
        />
        <TabItem
          value='tab_6'
          title='Billing'
          isSelected={currentTab === 'tab_6'}
        />
        <TabItem
          value='tab_7'
          title='Email'
          isSelected={currentTab === 'tab_7'}
        />
        <TabItem
          value='tab_8'
          title='Notifications'
          isSelected={currentTab === 'tab_8'}
        />
        <TabItem
          value='tab_9'
          title='Integrations'
          isSelected={currentTab === 'tab_9'}
        />
        <TabItem
          value='tab_10'
          title='API'
          isSelected={currentTab === 'tab_10'}
        />
      </Tabs.List>
    </Tabs.Root>
  );
}
