---
title: 【dockerfile】echoを使ってテキストファイルに複数行追記する
description: はじめに dockerfileでアプリケーションをインストールした後に、設定ファイルをカスタマイズしたいことはよくあると思います。dockerfileでvim等のテキストエディタをひらくことはできないので、ファイルを編集するためにechoを使います。
slug: docker_dockerfile_echo
category: docker
createDate: 2019/06/19
updated: 
cover: 'https://res.cloudinary.com/takasqr/image/upload/l_text:Sawarabi%20Gothic_80_bold:【dockerfile】echoを使ってテキストファイルに複数行追記する,co_rgb:fff,w_620,c_fit/v1712091289/ogp_image_zorhlz.png'
alt: 【dockerfile】echoを使ってテキストファイルに複数行追記する
recommend: false
---
## はじめに



はじめに dockerfileでアプリケーションをインストールした後に、設定ファイルをカスタマイズしたいことはよくあると思います。

dockerfileでvim等のテキストエディタをひらくことはできないので、ファイルを編集するためにechoを使います。




## コード
echoの内容をファイルに書き込むことで、編集する。

このコードはWordPressのログインページのみにBasic認証を設定するコードです。

```dockerfile
RUN echo '' >> /var/www/html/.htaccess; \
  echo '# BEGIN server setting' >> /var/www/html/.htaccess; \
  echo '' >> /var/www/html/.htaccess; \
  echo '<Files wp-login.php>' >> /var/www/html/.htaccess; \
  echo 'AuthUserFile "/var/www/html/.htpasswd"' >> /var/www/html/.htaccess; \
  echo 'AuthName "Basic Auth"' >> /var/www/html/.htaccess; \
  echo 'AuthType Basic' >> /var/www/html/.htaccess; \
  echo 'Require valid-user' >> /var/www/html/.htaccess; \
  echo '</Files>' >> /var/www/html/.htaccess; \
  echo '' >> /var/www/html/.htaccess; \
  echo '# END server setting' >> /var/www/html/.htaccess
```

