# Marpカスタマイズ用リポジトリ

このリポジトリは、MarpでJetBrains IDEのカラーテーマ (Darcula)を使うためのカスタムテーマと、それを使いやすくするスクリプトを設置したディレクトリです。

## セットアップ

1. 下記コマンドを実行

    ```bash
    npm ci
    ```

2. binにPATHを通す
3. mymarpに実行権限を付与

## 使い方

- mdファイルにカスタムテーマを指定

  ```markdown
  ---
  marp: true
  theme: gaia-darcula
  class: invert
  ---
  ```

- 変換したいmdファイルがあるディレクトリ上でmymarpコマンドを実行する事でスライドを生成できます
- コマンドを実行したディレクトリ上にある全てのmdファイルが変換されます
- mdファイルを変更するたびに再ビルドされます

### PDF出力

```bash
mymarp
```

or

```bash
mymarp pdf
```

### HTML出力

```bash
mymarp html
```
