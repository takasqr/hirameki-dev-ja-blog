import { describe, it, expect, vi } from 'vitest';
import { sendLog } from './sendLog';
import type { Log } from '../../types/Log';

// $fetchをモック
const mockFetch = vi.fn();
vi.stubGlobal('$fetch', mockFetch);

describe('sendLog', () => {
  it('正しいエンドポイントとパラメータで$fetchを呼び出す', async () => {
    const testLog: Log = {
      created: new Date('2023-01-01'),
      appName: 'hirameki-dev-ja-blog',
      message: 'テストメッセージ',
    };

    mockFetch.mockResolvedValue({ success: true });

    await sendLog(testLog);

    expect(mockFetch).toHaveBeenCalledWith('/api/log/', {
      method: 'POST',
      body: JSON.stringify(testLog),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('$fetchの戻り値を正しく返す', async () => {
    const testLog: Log = {
      created: new Date('2023-01-01'),
      appName: 'test-app',
      message: 'テストログ',
    };

    const expectedResponse = { success: true, id: 123 };
    mockFetch.mockResolvedValue(expectedResponse);

    const result = await sendLog(testLog);

    expect(result).toEqual(expectedResponse);
  });

  it('$fetchがエラーを投げた場合、エラーが伝播される', async () => {
    const testLog: Log = {
      created: new Date('2023-01-01'),
      appName: 'hirameki-dev-ja-blog',
      message: 'エラーテスト',
    };

    const error = new Error('ネットワークエラー');
    mockFetch.mockRejectedValue(error);

    await expect(sendLog(testLog)).rejects.toThrow('ネットワークエラー');
  });
});