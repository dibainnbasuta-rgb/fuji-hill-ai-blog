// 旧ドメイン（*.pages.dev）から独自ドメインへの恒久リダイレクト。
// ホスト名を見て pages.dev の時だけ転送する（新ドメイン自身へのループを防ぐため）。
const OLD_HOST = "fuji-hill-ai-blog.pages.dev";
const NEW_ORIGIN = "https://fujihillgold.com";

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === OLD_HOST) {
    return Response.redirect(NEW_ORIGIN + url.pathname + url.search, 301);
  }
  return context.next();
}
