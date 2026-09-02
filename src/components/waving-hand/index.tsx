/**
 * Antes isto era um PNG de 256×256 (586 KB!) com extensão `.gif`, renderizado a
 * 26px e sem animação nenhuma — sozinho, era o maior asset do site, maior que o
 * bundle do React. Agora é o próprio caractere emoji com a animação em CSS:
 * zero bytes de download, nítido em qualquer densidade de tela e, de fato,
 * acenando.
 */
export const WavingHand = () => (
  <span className="waving-hand mr-2 inline-block" aria-hidden="true">
    👋
  </span>
);
