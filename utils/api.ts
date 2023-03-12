import { ChatReq, ChatRes } from '@/pages/api/chat';

/** 请求 /api/chat 接口 */
export const fetchChat = async ({ text, parentMessageId }: ChatReq): Promise<ChatRes> => {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, parentMessageId }),
  });

  const resJson: ChatRes = await res.json();

  if (!res.ok) {
    let error = new Error();
    Object.assign(error, resJson);
    throw error;
  }

  return resJson;
};