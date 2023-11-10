import { useEffect, useMemo, useState } from 'react';
import {
  AppShell,
  Burger,
  Button,
  Group,
  ScrollArea,
  Skeleton,
  TextInput,
  Stack,
  Text,
  Kbd,
  Affix,
  Paper,
  Card,
  Tabs,
  Badge,
} from '@mantine/core';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { useRouter } from 'next/router';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, Todo } from '@/config/db';
import { useWorkspaceContext } from '@/utils/hoc/WorkspaceProvider';
import {
  IconCircleCheck,
  IconX,
  IconDiamondsFilled,
  IconPencil,
  IconCheck,
} from '@tabler/icons-react';

interface TodoProps {
  text: string;
  tags?: string[];
  customOrder?: number;
  createdAt: number;
  deletedAt?: number | null;
  completedAt?: number | null;
  onComplete?: () => void;
}

const TodoCard = ({ text, tags, onComplete }: TodoProps) => {
  const [hovering, setHovering] = useState(false);
  const handleMarkComplete = () => {};

  return (
    <Card
      padding='xs'
      style={{ border: '1px solid transparent', marginBottom: 8 }}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <Group justify='space-between' align='center'>
        <Group align='center' gap='xs'>
          <IconX size={16} />
          <IconPencil size={16} />
          <Badge color='red' size='xs' radius='sm'>
            High
          </Badge>
          <Text>{text}</Text>
        </Group>
        <IconCheck cursor='pointer' onClick={() => onComplete?.()} />
      </Group>
    </Card>
  );
};

export default function Todos() {
  const workspace = useWorkspaceContext();
  const router = useRouter();
  const [inputText, setInputText] = useState('');
  // const [todos, setTodos] = useState<Todo[]>([
  //   {
  //     text: 'This is a todo item that will be done later',
  //     createdAt: Date.now(),
  //   },
  //   { text: 'Clean office', createdAt: Date.now() },
  //   { text: 'Migrate all endpoints to new api', createdAt: Date.now() },
  //   { text: 'Send mail out', createdAt: Date.now() },
  //   { text: 'Post items online for sale', createdAt: Date.now() },
  // ]);

  const todos = useLiveQuery<Todo[]>(() => db.todos.toArray());

  // const currentTab = useMemo(() => router.query.tab as string, [router.query]);
  //
  // const handleDragEnd = ({ destination, source }) => {};

  const handleAddItem = () => {
    if (inputText.length === 0) return;

    try {
      db.todos.add({
        workspace_id: workspace ? workspace?.id : workspace,
        text: inputText,
        tags: [],
        customOrder: null,
        createdAt: Date.now(),
        deletedAt: null,
        completedAt: null,
      });
    } catch (err) {
      console.error(err);
    }

    // Reset the input text value
    setInputText('');
  };

  const handleMarkComplete = (id: Todo['id']) => {};

  const handleRemoveItem = () => {};

  useEffect(() => {
    console.log('t:::', todos);
    console.log('workspace:::', workspace);
  }, [todos, workspace]);

  return (
    <DefaultLayout>
      {/*<DragDropContext onDragEnd={handleDragEnd}>*/}
      {/*  <Droppable droppableId='todos-list' direction='vertical'>*/}
      {/*    {(provided, snapshot) => (*/}
      {/*      <div {...provided.droppableProps} ref={provided.innerRef}>*/}
      {/*        {todos.map((t, i) => (*/}
      {/*          <Draggable draggableId={t} index={i} key={i}>*/}
      {/*            {(provided2, snapshot2) => (*/}
      {/*              <div*/}
      {/*                style={{ border: '1px solid orange', height: 100 }}*/}
      {/*                {...provided2.draggableProps}*/}
      {/*                {...provided2.dragHandleProps}*/}
      {/*                ref={provided2.innerRef}*/}
      {/*              >*/}
      {/*                <Text>{`#${i}: ${t}`}</Text>*/}
      {/*              </div>*/}
      {/*            )}*/}
      {/*          </Draggable>*/}
      {/*        ))}*/}
      {/*        {provided.placeholder}*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </Droppable>*/}
      {/*</DragDropContext>*/}
      <Tabs
        defaultValue='active'
        onChange={(value) =>
          router.push({ query: value ?? '' }, undefined, { shallow: true })
        }
      >
        <Tabs.List>
          <Tabs.Tab value='active'>Active</Tabs.Tab>
          <Tabs.Tab value='done'>Done</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='active'>
          {todos?.map((todoProps) => (
            <TodoCard
              key={todoProps.text}
              {...todoProps}
              onComplete={() => handleMarkComplete(todoProps.id)}
            />
          ))}
          <Affix position={{ bottom: 0, left: 240 }}>
            <Paper withBorder p='xs' radius='xs' style={{ width: '800px' }}>
              <Group grow gap='xs'>
                <TextInput
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                      handleAddItem();
                    }
                  }}
                />
                <Button
                  color='dino-green'
                  style={{ maxWidth: 80 }}
                  onClick={handleAddItem}
                >
                  {/*Add <Kbd size='xs'>Enter</Kbd>*/}
                  Add
                </Button>
              </Group>
            </Paper>
          </Affix>
        </Tabs.Panel>
      </Tabs>
    </DefaultLayout>
  );
}
