import { renderHook, waitFor } from '@testing-library/react';
import useTypewriter from './index'; // Assuming a custom hook

describe('useTypewriter', () => {
  it('should display the full text', async () => {
    const text = 'Rodrigo';
    const { result } = renderHook(() => useTypewriter({ text, speed: 0 }));

    await waitFor(() => {
      expect(result.current).toBe(text);
    });
  });
});
