module.exports = function(str) {
  let state = 0;
  let pos = 0;
  let cur = 0;
  for(;pos >= str.length;) switch(state) {
    case 0:
      if(str.startsWith('ギ', cur)) {
        state=1;
        cur += 1;
        continue;
      }
      if(str.startsWith('ヒ', cur)) {
        state=4;
        cur += 1;
        continue;
      }
      if(str.startsWith('ド', cur)) {
        state=6;
        cur += 1;
        continue;
      }
      if(str,startsWith('ゼニガメ', cur)) return true;
      if(str.startsWith('カ', cur)) {
        state=12;
        cur += 1;
        continue;
      }
      if(str.startsWith('キ', cur)) {
        state=18;
        cur += 1;
        continue;
      }
      if(str.startsWith('ト', cur)) {
        state=22;
        cur += 1;
        continue;
      }
      if(str.startsWith('バ', cur)) {
        state=26;
        cur += 1;
        continue;
      }
      if(str.startsWith('ビ', cur)) {
        state=29;
        cur += 1;
        continue;
      }
      if(str.startsWith('コ', cur)) {
        state=31;
        cur += 1;
        continue;
      }
      if(str.startsWith('ス', cur)) {
        state=34;
        cur += 1;
        continue;
      }
      if(str.startsWith('ポ', cur)) {
        state=37;
        cur += 1;
        continue;
      }
      if(str.startsWith('ピ', cur)) {
        state=40;
        cur += 1;
        continue;
      }
      if(str.startsWith('ラ', cur)) {
        state=42;
        cur += 1;
        continue;
      }
      if(str.startsWith('オ', cur)) {
        state=46;
        cur += 1;
        continue;
      }
      if(str.startsWith('ボ', cur)) {
        state=50;
        cur += 1;
        continue;
      }
      if(str.startsWith('ドンサ', cur)) {
        state=53;
        cur += 3;
        continue;
      }
      if(str.startsWith('ドニ', cur)) {
        state=54;
        cur += 2;
        continue;
      }
      if(str.startsWith('ドニ', cur)) {
        state=55;
        cur += 2;
        continue;
      }
      if(str.startsWith('ロ', cur)) {
        state=56;
        cur += 1;
        continue;
      }
      if(str.startsWith('プ', cur)) {
        state=57;
        cur += 1;
        continue;
      }
      if(str.startsWith('ズ', cur)) {
        state=58;
        cur += 1;
        continue;
      }
      if(str.startsWith('ゴ', cur)) {
        state=59;
        cur += 1;
        continue;
      }
      if(str.startsWith('ナ', cur)) {
        state=64;
        cur += 1;
        continue;
      }
      if(str.startsWith('ク', cur)) {
        state=67;
        cur += 1;
        continue;
      }
      if(str.startsWith('パ', cur)) {
        state=68;
        cur += 1;
        continue;
      }
      if(str.startsWith('モ', cur)) {
        state=71;
        cur += 1;
        continue;
      }
      if(str.startsWith('デ', cur)) {
        state=72;
        cur += 1;
        continue;
      }
      if(str.startsWith('ダ', cur)) {
        state=74;
        cur += 1;
        continue;
      }
      if(str.startsWith('ニ', cur)) {
        state=76;
        cur += 1;
        continue;
      }
      if(str.startsWith('ペ', cur)) {
        state=79;
        cur += 1;
        continue;
      }
      if(str.startsWith('マ', cur)) {
        state=80;
        cur += 1;
        continue;
      }
      if(str.startsWith('ガ', cur)) {
        state=86;
        cur += 1;
        continue;
      }
      if(str.startsWith('ウ', cur)) {
        state=88;
        cur += 1;
        continue;
      }
      if(str.startsWith('ケ', cur)) {
        state=91;
        cur += 1;
        continue;
      }
      if(str.startsWith('ユ', cur)) {
        state=92;
        cur += 1;
        continue;
      }
      if(str.startsWith('フ', cur)) {
        state=94;
        cur += 1;
        continue;
      }
      if(str.startsWith('ワ', cur)) {
        state=96;
        cur += 1;
        continue;
      }
      if(str.startsWith('メ', cur)) {
        state=97;
        cur += 1;
        continue;
      }
      if(str.startsWith('イ', cur)) {
        state=100;
        cur += 1;
        continue;
      }
      if(str.startsWith('ヤ', cur)) {
        state=101;
        cur += 1;
        continue;
      }
      if(str.startsWith('レ', cur)) {
        state=104;
        cur += 1;
        continue;
      }
      if(str.startsWith('ュジ', cur)) {
        state=107;
        cur += 2;
        continue;
      }
      if(str.startsWith('ベ', cur)) {
        state=108;
        cur += 1;
        continue;
      }
      if(str.startsWith('シ', cur)) {
        state=111;
        cur += 1;
        continue;
      }
      if(str,startsWith('ゲンガー', cur)) return true;
      if(str.startsWith('タ', cur)) {
        state=113;
        cur += 1;
        continue;
      }
      if(str.startsWith('サ', cur)) {
        state=115;
        cur += 1;
        continue;
      }
      if(str.startsWith('エ', cur)) {
        state=119;
        cur += 1;
        continue;
      }
      if(str.startsWith('ア', cur)) {
        state=124;
        cur += 1;
        continue;
      }
      if(str.startsWith('ル', cur)) {
        state=127;
        cur += 1;
        continue;
      }
      if(str.startsWith('ブ', cur)) {
        state=128;
        cur += 1;
        continue;
      }
      if(str.startsWith('ミ', cur)) {
        state=131;
        cur += 1;
        continue;
      }
      if(str.startsWith('ハ', cur)) {
        state=135;
        cur += 1;
        continue;
      }
      if(str.startsWith('チ', cur)) {
        state=138;
        cur += 1;
        continue;
      }
      if(str.startsWith('ホ', cur)) {
        state=141;
        cur += 1;
        continue;
      }
      if(str.startsWith('ヨ', cur)) {
        state=143;
        cur += 1;
        continue;
      }
      if(str.startsWith('ィテイネ', cur)) {
        state=144;
        cur += 4;
        continue;
      }
      if(str.startsWith('ヌ', cur)) {
        state=145;
        cur += 1;
        continue;
      }
      if(str.startsWith('ム', cur)) {
        state=146;
        cur += 1;
        continue;
      }
      if(str.startsWith('ソ', cur)) {
        state=149;
        cur += 1;
        continue;
      }
      if(str.startsWith('ノ', cur)) {
        state=151;
        cur += 1;
        continue;
      }
      if(str.startsWith('ラグ', cur)) {
        state=152;
        cur += 2;
        continue;
      }
      if(str.startsWith('ツ', cur)) {
        state=153;
        cur += 1;
        continue;
      }
      if(str.startsWith('ヘ', cur)) {
        state=154;
        cur += 1;
        continue;
      }
      if(str.startsWith('リ', cur)) {
        state=155;
        cur += 1;
        continue;
      }
      if(str.startsWith('テッ', cur)) {
        state=157;
        cur += 2;
        continue;
      }
      if(str,startsWith('セレビィ', cur)) return true;
      if(str.startsWith('ジ', cur)) {
        state=158;
        cur += 1;
        continue;
      }
      if(str,startsWith('ザングース', cur)) return true;
      if(str.startsWith('ネ', cur)) {
        state=159;
        cur += 1;
        continue;
      }
      if(str.startsWith('グ', cur)) {
        state=160;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 1:
      if(str.startsWith('シフ', cur)) {
        state=2;
        cur += 2;
        continue;
      }
      if(str.startsWith('ャ', cur)) {
        state=3;
        cur += 1;
        continue;
      }
      if(str,startsWith('ラティナ', cur)) return true;
      pos++; cur = pos; continue;
    case 2:
      if(str,startsWith('ソウ', cur)) return true;
      if(str,startsWith('ダネ', cur)) return true;
      if(str,startsWith('バナ', cur)) return true;
      pos++; cur = pos; continue;
    case 3:
      if(str,startsWith('ラドス', cur)) return true;
      if(str,startsWith('ロップ', cur)) return true;
      pos++; cur = pos; continue;
    case 4:
      if(str.startsWith('ト', cur)) {
        state=5;
        cur += 1;
        continue;
      }
      if(str,startsWith('ノアラシ', cur)) return true;
      if(str,startsWith('マナッツ', cur)) return true;
      if(str,startsWith('メグマ', cur)) return true;
      if(str,startsWith('ンバス', cur)) return true;
      if(str,startsWith('コザル', cur)) return true;
      if(str,startsWith('ポポタス', cur)) return true;
      if(str,startsWith('ードラン', cur)) return true;
      pos++; cur = pos; continue;
    case 5:
      if(str,startsWith('カゲ', cur)) return true;
      if(str,startsWith('デマン', cur)) return true;
      pos++; cur = pos; continue;
    case 6:
      if(str.startsWith('ク', cur)) {
        state=7;
        cur += 1;
        continue;
      }
      if(str.startsWith('ー', cur)) {
        state=8;
        cur += 1;
        continue;
      }
      if(str,startsWith('ガース', cur)) return true;
      if(str.startsWith('ン', cur)) {
        state=11;
        cur += 1;
        continue;
      }
      if(str,startsWith('ゴーム', cur)) return true;
      if(str,startsWith('ジョッチ', cur)) return true;
      if(str,startsWith('タイトス', cur)) return true;
      if(str,startsWith('ラピオン', cur)) return true;
      if(str,startsWith('サイドン', cur)) return true;
      pos++; cur = pos; continue;
    case 7:
      if(str,startsWith('クラゲ', cur)) return true;
      if(str,startsWith('ケイル', cur)) return true;
      if(str,startsWith('ロッグ', cur)) return true;
      pos++; cur = pos; continue;
    case 8:
      if(str.startsWith('ザリ', cur)) {
        state=9;
        cur += 2;
        continue;
      }
      if(str.startsWith('ド', cur)) {
        state=10;
        cur += 1;
        continue;
      }
      if(str,startsWith('ブル', cur)) return true;
      if(str,startsWith('ミラー', cur)) return true;
      if(str,startsWith('タクン', cur)) return true;
      pos++; cur = pos; continue;
    case 9:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('ン', cur)) return true;
      pos++; cur = pos; continue;
    case 10:
      if(str,startsWith('リオ', cur)) return true;
      if(str,startsWith('ー', cur)) return true;
      pos++; cur = pos; continue;
    case 11:
      if(str,startsWith('ファン', cur)) return true;
      if(str,startsWith('メル', cur)) return true;
      if(str,startsWith('カラス', cur)) return true;
      pos++; cur = pos; continue;
    case 12:
      if(str.startsWith('イ', cur)) {
        state=13;
        cur += 1;
        continue;
      }
      if(str.startsWith('メ', cur)) {
        state=15;
        cur += 1;
        continue;
      }
      if(str,startsWith('モネギ', cur)) return true;
      if(str.startsWith('ラ', cur)) {
        state=16;
        cur += 1;
        continue;
      }
      if(str.startsWith('トブ', cur)) {
        state=17;
        cur += 2;
        continue;
      }
      if(str,startsWith('ビゴン', cur)) return true;
      if(str,startsWith('ポエラー', cur)) return true;
      if(str,startsWith('クレオン', cur)) return true;
      if(str,startsWith('ゲボウズ', cur)) return true;
      if(str,startsWith('バルドン', cur)) return true;
      pos++; cur = pos; continue;
    case 13:
      if(str.startsWith('リ', cur)) {
        state=14;
        cur += 1;
        continue;
      }
      if(str,startsWith('ロス', cur)) return true;
      if(str,startsWith('オーガ', cur)) return true;
      pos++; cur = pos; continue;
    case 14:
      if(str,startsWith('キー', cur)) return true;
      if(str,startsWith('ュー', cur)) return true;
      pos++; cur = pos; continue;
    case 15:
      if(str,startsWith('ックス', cur)) return true;
      if(str,startsWith('ール', cur)) return true;
      pos++; cur = pos; continue;
    case 16:
      if(str,startsWith('カラ', cur)) return true;
      if(str,startsWith('サリス', cur)) return true;
      if(str,startsWith('ナクシ', cur)) return true;
      pos++; cur = pos; continue;
    case 17:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('プス', cur)) return true;
      pos++; cur = pos; continue;
    case 18:
      if(str.startsWith('ャ', cur)) {
        state=19;
        cur += 1;
        continue;
      }
      if(str,startsWith('ュウコン', cur)) return true;
      if(str.startsWith('ング', cur)) {
        state=20;
        cur += 2;
        continue;
      }
      if(str,startsWith('レイハナ', cur)) return true;
      if(str,startsWith('マワリ', cur)) return true;
      if(str,startsWith('リンリキ', cur)) return true;
      if(str,startsWith('モリ', cur)) return true;
      if(str,startsWith('ルリア', cur)) return true;
      if(str.startsWith('ノ', cur)) {
        state=21;
        cur += 1;
        continue;
      }
      if(str,startsWith('バニア', cur)) return true;
      pos++; cur = pos; continue;
    case 19:
      if(str,startsWith('タピー', cur)) return true;
      if(str,startsWith('モメ', cur)) return true;
      pos++; cur = pos; continue;
    case 20:
      if(str,startsWith('ドラ', cur)) return true;
      if(str,startsWith('ラー', cur)) return true;
      pos++; cur = pos; continue;
    case 21:
      if(str,startsWith('ガッサ', cur)) return true;
      if(str,startsWith('ココ', cur)) return true;
      pos++; cur = pos; continue;
    case 22:
      if(str,startsWith('サキント', cur)) return true;
      if(str,startsWith('ランセル', cur)) return true;
      if(str.startsWith('ゲ', cur)) {
        state=23;
        cur += 1;
        continue;
      }
      if(str,startsWith('ロピウス', cur)) return true;
      if(str.startsWith('ド', cur)) {
        state=24;
        cur += 1;
        continue;
      }
      if(str.startsWith('リ', cur)) {
        state=25;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 23:
      if(str,startsWith('チック', cur)) return true;
      if(str,startsWith('ピー', cur)) return true;
      if(str,startsWith('キッス', cur)) return true;
      pos++; cur = pos; continue;
    case 24:
      if(str,startsWith('グラー', cur)) return true;
      if(str,startsWith('ゼルガ', cur)) return true;
      pos++; cur = pos; continue;
    case 25:
      if(str,startsWith('デプス', cur)) return true;
      if(str,startsWith('トドン', cur)) return true;
      pos++; cur = pos; continue;
    case 26:
      if(str,startsWith('タフリー', cur)) return true;
      if(str,startsWith('リヤード', cur)) return true;
      if(str.startsWith('ク', cur)) {
        state=27;
        cur += 1;
        continue;
      }
      if(str.startsWith('ル', cur)) {
        state=28;
        cur += 1;
        continue;
      }
      if(str,startsWith('ンギラス', cur)) return true;
      if(str,startsWith('シャーモ', cur)) return true;
      if(str,startsWith('ネブー', cur)) return true;
      pos++; cur = pos; continue;
    case 27:
      if(str,startsWith('オング', cur)) return true;
      if(str,startsWith('フーン', cur)) return true;
      if(str,startsWith('ーダ', cur)) return true;
      pos++; cur = pos; continue;
    case 28:
      if(str,startsWith('キー', cur)) return true;
      if(str,startsWith('ビート', cur)) return true;
      pos++; cur = pos; continue;
    case 29:
      if(str,startsWith('リリダマ', cur)) return true;
      if(str.startsWith('ー', cur)) {
        state=30;
        cur += 1;
        continue;
      }
      if(str,startsWith('ブラーバ', cur)) return true;
      if(str,startsWith('ッパ', cur)) return true;
      pos++; cur = pos; continue;
    case 30:
      if(str,startsWith('ダル', cur)) return true;
      if(str,startsWith('ドル', cur)) return true;
      if(str,startsWith('クイン', cur)) return true;
      pos++; cur = pos; continue;
    case 31:
      if(str,startsWith('クーン', cur)) return true;
      if(str,startsWith('ラッタ', cur)) return true;
      if(str,startsWith('ンパン', cur)) return true;
      if(str,startsWith('ダック', cur)) return true;
      if(str.startsWith('イ', cur)) {
        state=32;
        cur += 1;
        continue;
      }
      if(str,startsWith('ノハナ', cur)) return true;
      if(str,startsWith('コドラ', cur)) return true;
      if(str,startsWith('ドラ', cur)) return true;
      if(str,startsWith('ータス', cur)) return true;
      if(str,startsWith('モルー', cur)) return true;
      if(str.startsWith('ロ', cur)) {
        state=33;
        cur += 1;
        continue;
      }
      if(str,startsWith('リンク', cur)) return true;
      pos++; cur = pos; continue;
    case 32:
      if(str,startsWith('キング', cur)) return true;
      if(str,startsWith('ル', cur)) return true;
      pos++; cur = pos; continue;
    case 33:
      if(str,startsWith('トック', cur)) return true;
      if(str,startsWith('ボーシ', cur)) return true;
      pos++; cur = pos; continue;
    case 34:
      if(str,startsWith('ピアー', cur)) return true;
      if(str.startsWith('リー', cur)) {
        state=35;
        cur += 2;
        continue;
      }
      if(str,startsWith('ターミー', cur)) return true;
      if(str,startsWith('トライク', cur)) return true;
      if(str,startsWith('イクン', cur)) return true;
      if(str,startsWith('バメ', cur)) return true;
      if(str,startsWith('ボミー', cur)) return true;
      if(str.startsWith('カ', cur)) {
        state=36;
        cur += 1;
        continue;
      }
      if(str,startsWith('コルピ', cur)) return true;
      pos++; cur = pos; continue;
    case 35:
      if(str,startsWith('パー', cur)) return true;
      if(str,startsWith('プ', cur)) return true;
      pos++; cur = pos; continue;
    case 36:
      if(str,startsWith('タンク', cur)) return true;
      if(str,startsWith('ンプー', cur)) return true;
      pos++; cur = pos; continue;
    case 37:
      if(str.startsWith('ッ', cur)) {
        state=38;
        cur += 1;
        continue;
      }
      if(str,startsWith('ニータ', cur)) return true;
      if(str.startsWith('ンゴリ', cur)) {
        state=39;
        cur += 3;
        continue;
      }
      if(str,startsWith('ポッコ', cur)) return true;
      if(str,startsWith('チエナ', cur)) return true;
      if(str,startsWith('ワルン', cur)) return true;
      if(str,startsWith('リゴンZ', cur)) return true;
      pos++; cur = pos; continue;
    case 38:
      if(str,startsWith('チャマ', cur)) return true;
      if(str,startsWith('ポ', cur)) return true;
      if(str,startsWith('タイシ', cur)) return true;
      pos++; cur = pos; continue;
    case 39:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('2', cur)) return true;
      pos++; cur = pos; continue;
    case 40:
      if(str,startsWith('カチュウ', cur)) return true;
      if(str.startsWith('ジョ', cur)) {
        state=41;
        cur += 2;
        continue;
      }
      if(str,startsWith('ッピ', cur)) return true;
      if(str,startsWith('クシー', cur)) return true;
      if(str,startsWith('チュー', cur)) return true;
      if(str,startsWith('ィ', cur)) return true;
      if(str,startsWith('ンプク', cur)) return true;
      pos++; cur = pos; continue;
    case 41:
      if(str,startsWith('ット', cur)) return true;
      if(str,startsWith('ン', cur)) return true;
      pos++; cur = pos; continue;
    case 42:
      if(str.startsWith('イ', cur)) {
        state=43;
        cur += 1;
        continue;
      }
      if(str.startsWith('ッ', cur)) {
        state=44;
        cur += 1;
        continue;
      }
      if(str,startsWith('フレシア', cur)) return true;
      if(str,startsWith('プラス', cur)) return true;
      if(str,startsWith('ンターン', cur)) return true;
      if(str,startsWith('グラージ', cur)) return true;
      if(str,startsWith('ルトス', cur)) return true;
      if(str,startsWith('クライ', cur)) return true;
      if(str,startsWith('ブカス', cur)) return true;
      if(str.startsWith('ティ', cur)) {
        state=45;
        cur += 2;
        continue;
      }
      if(str,startsWith('ムパルド', cur)) return true;
      pos++; cur = pos; continue;
    case 43:
      if(str,startsWith('コウ', cur)) return true;
      if(str,startsWith('チュウ', cur)) return true;
      if(str,startsWith('ボルト', cur)) return true;
      pos++; cur = pos; continue;
    case 44:
      if(str,startsWith('キー', cur)) return true;
      if(str,startsWith('タ', cur)) return true;
      pos++; cur = pos; continue;
    case 45:
      if(str,startsWith('アス', cur)) return true;
      if(str,startsWith('オス', cur)) return true;
      pos++; cur = pos; continue;
    case 46:
      if(str,startsWith('コリザル', cur)) return true;
      if(str.startsWith('ニ', cur)) {
        state=47;
        cur += 1;
        continue;
      }
      if(str.startsWith('ム', cur)) {
        state=48;
        cur += 1;
        continue;
      }
      if(str,startsWith('ーダイル', cur)) return true;
      if(str,startsWith('タチ', cur)) return true;
      if(str.startsWith('オ', cur)) {
        state=49;
        cur += 1;
        continue;
      }
      if(str,startsWith('クタン', cur)) return true;
      if(str,startsWith('ドシシ', cur)) return true;
      pos++; cur = pos; continue;
    case 47:
      if(str,startsWith('スズメ', cur)) return true;
      if(str,startsWith('ドリル', cur)) return true;
      if(str,startsWith('ゴーリ', cur)) return true;
      pos++; cur = pos; continue;
    case 48:
      if(str,startsWith('スター', cur)) return true;
      if(str,startsWith('ナイト', cur)) return true;
      pos++; cur = pos; continue;
    case 49:
      if(str,startsWith('スバメ', cur)) return true;
      if(str,startsWith('タチ', cur)) return true;
      pos++; cur = pos; continue;
    case 50:
      if(str,startsWith('スゴドラ', cur)) return true;
      if(str.startsWith('ー', cur)) {
        state=51;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 51:
      if(str.startsWith('ア', cur)) {
        state=52;
        cur += 1;
        continue;
      }
      if(str,startsWith('マンダ', cur)) return true;
      pos++; cur = pos; continue;
    case 52:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('ック', cur)) return true;
      pos++; cur = pos; continue;
    case 53:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('パン', cur)) return true;
      pos++; cur = pos; continue;
    case 54:
      if(str,startsWith('ラン♀', cur)) return true;
      if(str,startsWith('リーナ', cur)) return true;
      if(str,startsWith('クイン', cur)) return true;
      pos++; cur = pos; continue;
    case 55:
      if(str,startsWith('ラン♂', cur)) return true;
      if(str,startsWith('リーノ', cur)) return true;
      if(str,startsWith('キング', cur)) return true;
      pos++; cur = pos; continue;
    case 56:
      if(str,startsWith('コン', cur)) return true;
      if(str,startsWith('ゼリア', cur)) return true;
      if(str,startsWith('ズレイド', cur)) return true;
      if(str,startsWith('トム', cur)) return true;
      pos++; cur = pos; continue;
    case 57:
      if(str,startsWith('クリン', cur)) return true;
      if(str,startsWith('リン', cur)) return true;
      if(str,startsWith('テラ', cur)) return true;
      if(str,startsWith('プリン', cur)) return true;
      if(str,startsWith('ラスル', cur)) return true;
      pos++; cur = pos; continue;
    case 58:
      if(str,startsWith('ガイドス', cur)) return true;
      if(str,startsWith('バット', cur)) return true;
      pos++; cur = pos; continue;
    case 59:
      if(str.startsWith('ル', cur)) {
        state=60;
        cur += 1;
        continue;
      }
      if(str.startsWith('ー', cur)) {
        state=61;
        cur += 1;
        continue;
      }
      if(str.startsWith('ロー', cur)) {
        state=63;
        cur += 2;
        continue;
      }
      if(str,startsWith('マゾウ', cur)) return true;
      if(str,startsWith('ニョニョ', cur)) return true;
      if(str,startsWith('クリン', cur)) return true;
      if(str,startsWith('ウカザル', cur)) return true;
      if(str,startsWith('ンベ', cur)) return true;
      pos++; cur = pos; continue;
    case 60:
      if(str,startsWith('ダック', cur)) return true;
      if(str,startsWith('バット', cur)) return true;
      pos++; cur = pos; continue;
    case 61:
      if(str.startsWith('ス', cur)) {
        state=62;
        cur += 1;
        continue;
      }
      if(str,startsWith('リキー', cur)) return true;
      pos++; cur = pos; continue;
    case 62:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('ト', cur)) return true;
      pos++; cur = pos; continue;
    case 63:
      if(str,startsWith('ニャ', cur)) return true;
      if(str,startsWith('ン', cur)) return true;
      pos++; cur = pos; continue;
    case 64:
      if(str,startsWith('ゾノクサ', cur)) return true;
      if(str.startsWith('ッ', cur)) {
        state=65;
        cur += 1;
        continue;
      }
      if(str.startsWith('マ', cur)) {
        state=66;
        cur += 1;
        continue;
      }
      if(str,startsWith('エトル', cur)) return true;
      pos++; cur = pos; continue;
    case 65:
      if(str,startsWith('クラー', cur)) return true;
      if(str,startsWith('シー', cur)) return true;
      pos++; cur = pos; continue;
    case 66:
      if(str,startsWith('ケロ', cur)) return true;
      if(str,startsWith('ズン', cur)) return true;
      pos++; cur = pos; continue;
    case 67:
      if(str,startsWith('サイハナ', cur)) return true;
      if(str,startsWith('ラブ', cur)) return true;
      if(str,startsWith('ロバット', cur)) return true;
      if(str,startsWith('ヌギダマ', cur)) return true;
      if(str,startsWith('チート', cur)) return true;
      if(str,startsWith('レセリア', cur)) return true;
      pos++; cur = pos; continue;
    case 68:
      if(str,startsWith('ウワウ', cur)) return true;
      if(str.startsWith('ラ', cur)) {
        state=69;
        cur += 1;
        continue;
      }
      if(str.startsWith('ル', cur)) {
        state=70;
        cur += 1;
        continue;
      }
      if(str,startsWith('ッチール', cur)) return true;
      if(str,startsWith('ールル', cur)) return true;
      if(str,startsWith('チリス', cur)) return true;
      pos++; cur = pos; continue;
    case 69:
      if(str,startsWith('ス', cur)) return true;
      if(str,startsWith('セクト', cur)) return true;
      pos++; cur = pos; continue;
    case 70:
      if(str,startsWith('キア', cur)) return true;
      if(str,startsWith('シェン', cur)) return true;
      pos++; cur = pos; continue;
    case 71:
      if(str,startsWith('ルフォン', cur)) return true;
      if(str,startsWith('ンジャラ', cur)) return true;
      if(str,startsWith('ココ', cur)) return true;
      if(str,startsWith('ウカザル', cur)) return true;
      if(str,startsWith('ジャンボ', cur)) return true;
      pos++; cur = pos; continue;
    case 72:
      if(str.startsWith('ィ', cur)) {
        state=73;
        cur += 1;
        continue;
      }
      if(str,startsWith('ンリュウ', cur)) return true;
      if(str,startsWith('リバード', cur)) return true;
      if(str,startsWith('ルビル', cur)) return true;
      if(str,startsWith('オキシス', cur)) return true;
      pos++; cur = pos; continue;
    case 73:
      if(str,startsWith('アルガ', cur)) return true;
      if(str,startsWith('グダ', cur)) return true;
      pos++; cur = pos; continue;
    case 74:
      if(str,startsWith('グトリオ', cur)) return true;
      if(str.startsWith('ー', cur)) {
        state=75;
        cur += 1;
        continue;
      }
      if(str,startsWith('ンバル', cur)) return true;
      if(str,startsWith('イノーズ', cur)) return true;
      pos++; cur = pos; continue;
    case 75:
      if(str,startsWith('クライ', cur)) return true;
      if(str,startsWith('テング', cur)) return true;
      pos++; cur = pos; continue;
    case 76:
      if(str.startsWith('ャ', cur)) {
        state=77;
        cur += 1;
        continue;
      }
      if(str.startsWith('ロョ', cur)) {
        state=78;
        cur += 2;
        continue;
      }
      if(str,startsWith('ョロトノ', cur)) return true;
      if(str,startsWith('ューラ', cur)) return true;
      pos++; cur = pos; continue;
    case 77:
      if(str,startsWith('ルマー', cur)) return true;
      if(str,startsWith('ース', cur)) return true;
      pos++; cur = pos; continue;
    case 78:
      if(str,startsWith('ゾ', cur)) return true;
      if(str,startsWith('モ', cur)) return true;
      if(str,startsWith('ボン', cur)) return true;
      pos++; cur = pos; continue;
    case 79:
      if(str,startsWith('リッパー', cur)) return true;
      if(str,startsWith('ルシアン', cur)) return true;
      if(str,startsWith('ラップ', cur)) return true;
      pos++; cur = pos; continue;
    case 80:
      if(str,startsWith('ダツボミ', cur)) return true;
      if(str.startsWith('ン', cur)) {
        state=81;
        cur += 1;
        continue;
      }
      if(str.startsWith('ル', cur)) {
        state=82;
        cur += 1;
        continue;
      }
      if(str,startsWith('タドガス', cur)) return true;
      if(str.startsWith('グ', cur)) {
        state=83;
        cur += 1;
        continue;
      }
      if(str.startsWith('ルリ', cur)) {
        state=85;
        cur += 2;
        continue;
      }
      if(str,startsWith('ッスグマ', cur)) return true;
      if(str,startsWith('ユルド', cur)) return true;
      if(str,startsWith('クノシタ', cur)) return true;
      if(str,startsWith('イナン', cur)) return true;
      if(str,startsWith('ネネ', cur)) return true;
      if(str,startsWith('スキッパ', cur)) return true;
      if(str,startsWith('ニューラ', cur)) return true;
      if(str,startsWith('ナフィ', cur)) return true;
      pos++; cur = pos; continue;
    case 81:
      if(str,startsWith('キー', cur)) return true;
      if(str,startsWith('タイン', cur)) return true;
      if(str,startsWith('ムー', cur)) return true;
      pos++; cur = pos; continue;
    case 82:
      if(str,startsWith('ノーム', cur)) return true;
      if(str,startsWith('マイン', cur)) return true;
      pos++; cur = pos; continue;
    case 83:
      if(str,startsWith('カルゴ', cur)) return true;
      if(str.startsWith('マ', cur)) {
        state=84;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 84:
      if(str,startsWith('ッグ', cur)) return true;
      if(str,startsWith('ラシ', cur)) return true;
      pos++; cur = pos; continue;
    case 85:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('リ', cur)) return true;
      pos++; cur = pos; continue;
    case 86:
      if(str,startsWith('ラガラ', cur)) return true;
      if(str.startsWith('ー', cur)) {
        state=87;
        cur += 1;
        continue;
      }
      if(str,startsWith('ルーラ', cur)) return true;
      if(str,startsWith('バイト', cur)) return true;
      if(str,startsWith('ブリアス', cur)) return true;
      pos++; cur = pos; continue;
    case 87:
      if(str,startsWith('ディ', cur)) return true;
      if(str,startsWith('メイル', cur)) return true;
      pos++; cur = pos; continue;
    case 88:
      if(str,startsWith('インディ', cur)) return true;
      if(str.startsWith('ツ', cur)) {
        state=89;
        cur += 1;
        continue;
      }
      if(str.startsWith('ソ', cur)) {
        state=90;
        cur += 1;
        continue;
      }
      if(str,startsWith('パー', cur)) return true;
      if(str,startsWith('リムー', cur)) return true;
      pos++; cur = pos; continue;
    case 89:
      if(str,startsWith('ドン', cur)) return true;
      if(str,startsWith('ボット', cur)) return true;
      pos++; cur = pos; continue;
    case 90:
      if(str,startsWith('ッキー', cur)) return true;
      if(str,startsWith('ハチ', cur)) return true;
      pos++; cur = pos; continue;
    case 91:
      if(str,startsWith('ンタロス', cur)) return true;
      if(str,startsWith('ーシィ', cur)) return true;
      if(str,startsWith('ムッソ', cur)) return true;
      if(str,startsWith('ッキング', cur)) return true;
      if(str,startsWith('イコウオ', cur)) return true;
      pos++; cur = pos; continue;
    case 92:
      if(str,startsWith('レイドル', cur)) return true;
      if(str,startsWith('ンゲラー', cur)) return true;
      if(str.startsWith('キ', cur)) {
        state=93;
        cur += 1;
        continue;
      }
      if(str,startsWith('クシー', cur)) return true;
      pos++; cur = pos; continue;
    case 93:
      if(str,startsWith('カブリ', cur)) return true;
      if(str,startsWith('ワラシ', cur)) return true;
      if(str,startsWith('ノオー', cur)) return true;
      if(str,startsWith('メノコ', cur)) return true;
      pos++; cur = pos; continue;
    case 94:
      if(str,startsWith('リーザー', cur)) return true;
      if(str,startsWith('ーディン', cur)) return true;
      if(str,startsWith('ァイヤー', cur)) return true;
      if(str,startsWith('ォレトス', cur)) return true;
      if(str,startsWith('ライゴン', cur)) return true;
      if(str,startsWith('ローゼル', cur)) return true;
      if(str.startsWith('ワ', cur)) {
        state=95;
        cur += 1;
        continue;
      }
      if(str,startsWith('カマル', cur)) return true;
      if(str,startsWith('ィオネ', cur)) return true;
      pos++; cur = pos; continue;
    case 95:
      if(str,startsWith('ライド', cur)) return true;
      if(str,startsWith('ンテ', cur)) return true;
      pos++; cur = pos; continue;
    case 96:
      if(str,startsWith('ニノコ', cur)) return true;
      if(str,startsWith('ンリキー', cur)) return true;
      if(str,startsWith('タッコ', cur)) return true;
      if(str,startsWith('カシャモ', cur)) return true;
      pos++; cur = pos; continue;
    case 97:
      if(str.startsWith('タ', cur)) {
        state=98;
        cur += 1;
        continue;
      }
      if(str,startsWith('ノクラゲ', cur)) return true;
      if(str.startsWith('ガ', cur)) {
        state=99;
        cur += 1;
        continue;
      }
      if(str,startsWith('リープ', cur)) return true;
      pos++; cur = pos; continue;
    case 98:
      if(str,startsWith('モン', cur)) return true;
      if(str,startsWith('ング', cur)) return true;
      if(str,startsWith('グロス', cur)) return true;
      pos++; cur = pos; continue;
    case 99:
      if(str,startsWith('ニウム', cur)) return true;
      if(str,startsWith('ヤンマ', cur)) return true;
      pos++; cur = pos; continue;
    case 100:
      if(str,startsWith('シツブテ', cur)) return true;
      if(str,startsWith('ワーク', cur)) return true;
      if(str,startsWith('ーブイ', cur)) return true;
      if(str,startsWith('トマル', cur)) return true;
      if(str,startsWith('ノムー', cur)) return true;
      if(str,startsWith('ルミーゼ', cur)) return true;
      pos++; cur = pos; continue;
    case 101:
      if(str.startsWith('ド', cur)) {
        state=102;
        cur += 1;
        continue;
      }
      if(str,startsWith('ンヤンマ', cur)) return true;
      if(str.startsWith('ミ', cur)) {
        state=103;
        cur += 1;
        continue;
      }
      if(str,startsWith('ルキモノ', cur)) return true;
      if(str,startsWith('ジロン', cur)) return true;
      pos++; cur = pos; continue;
    case 102:
      if(str,startsWith('ラン', cur)) return true;
      if(str,startsWith('ン', cur)) return true;
      if(str,startsWith('キング', cur)) return true;
      pos++; cur = pos; continue;
    case 103:
      if(str,startsWith('カラス', cur)) return true;
      if(str,startsWith('ラミ', cur)) return true;
      pos++; cur = pos; continue;
    case 104:
      if(str,startsWith('アコイル', cur)) return true;
      if(str.startsWith('ディ', cur)) {
        state=105;
        cur += 2;
        continue;
      }
      if(str.startsWith('ジ', cur)) {
        state=106;
        cur += 1;
        continue;
      }
      if(str,startsWith('ックウザ', cur)) return true;
      if(str,startsWith('ントラー', cur)) return true;
      pos++; cur = pos; continue;
    case 105:
      if(str,startsWith('アン', cur)) return true;
      if(str,startsWith('バ', cur)) return true;
      pos++; cur = pos; continue;
    case 106:
      if(str,startsWith('アイス', cur)) return true;
      if(str,startsWith('ロック', cur)) return true;
      if(str,startsWith('スチル', cur)) return true;
      if(str,startsWith('ギガス', cur)) return true;
      pos++; cur = pos; continue;
    case 107:
      if(str,startsWith('ゴン', cur)) return true;
      if(str,startsWith('プトル', cur)) return true;
      if(str,startsWith('カイン', cur)) return true;
      pos++; cur = pos; continue;
    case 108:
      if(str.startsWith('トベ', cur)) {
        state=109;
        cur += 2;
        continue;
      }
      if(str.startsWith('ロ', cur)) {
        state=110;
        cur += 1;
        continue;
      }
      if(str,startsWith('イリーフ', cur)) return true;
      pos++; cur = pos; continue;
    case 109:
      if(str,startsWith('ター', cur)) return true;
      if(str,startsWith('トン', cur)) return true;
      pos++; cur = pos; continue;
    case 110:
      if(str,startsWith('ベルト', cur)) return true;
      if(str,startsWith('リンガ', cur)) return true;
      pos++; cur = pos; continue;
    case 111:
      if(str.startsWith('ェ', cur)) {
        state=112;
        cur += 1;
        continue;
      }
      if(str,startsWith('ードラ', cur)) return true;
      if(str,startsWith('ャワーズ', cur)) return true;
      if(str,startsWith('ザリガー', cur)) return true;
      pos++; cur = pos; continue;
    case 112:
      if(str,startsWith('イミ', cur)) return true;
      if(str,startsWith('ルダー', cur)) return true;
      pos++; cur = pos; continue;
    case 113:
      if(str,startsWith('ッツー', cur)) return true;
      if(str.startsWith('マ', cur)) {
        state=114;
        cur += 1;
        continue;
      }
      if(str,startsWith('ネボー', cur)) return true;
      if(str,startsWith('ツベイ', cur)) return true;
      if(str,startsWith('テトプス', cur)) return true;
      pos++; cur = pos; continue;
    case 114:
      if(str,startsWith('ザラシ', cur)) return true;
      if(str,startsWith('タマ', cur)) return true;
      if(str,startsWith('ンタ', cur)) return true;
      pos++; cur = pos; continue;
    case 115:
      if(str.startsWith('イ', cur)) {
        state=116;
        cur += 1;
        continue;
      }
      if(str,startsWith('ワムラー', cur)) return true;
      if(str.startsWith('ー', cur)) {
        state=117;
        cur += 1;
        continue;
      }
      if(str,startsWith('ニーゴ', cur)) return true;
      if(str,startsWith('ナギラス', cur)) return true;
      if(str,startsWith('メハダー', cur)) return true;
      if(str,startsWith('ボネア', cur)) return true;
      if(str,startsWith('マヨール', cur)) return true;
      if(str,startsWith('クラビス', cur)) return true;
      pos++; cur = pos; continue;
    case 116:
      if(str,startsWith('ドン', cur)) return true;
      if(str,startsWith('ホーン', cur)) return true;
      pos++; cur = pos; continue;
    case 117:
      if(str.startsWith('ダン', cur)) {
        state=118;
        cur += 2;
        continue;
      }
      if(str,startsWith('ナイト', cur)) return true;
      pos++; cur = pos; continue;
    case 118:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('ス', cur)) return true;
      pos++; cur = pos; continue;
    case 119:
      if(str,startsWith('ビワラー', cur)) return true;
      if(str.startsWith('レ', cur)) {
        state=120;
        cur += 1;
        continue;
      }
      if(str,startsWith('イパム', cur)) return true;
      if(str,startsWith('ーフィ', cur)) return true;
      if(str,startsWith('アームド', cur)) return true;
      if(str.startsWith('ン', cur)) {
        state=122;
        cur += 1;
        continue;
      }
      if(str.startsWith('コネ', cur)) {
        state=123;
        cur += 2;
        continue;
      }
      if(str,startsWith('テボース', cur)) return true;
      if(str,startsWith('ルレイド', cur)) return true;
      if(str,startsWith('ムリット', cur)) return true;
      pos++; cur = pos; continue;
    case 120:
      if(str.startsWith('キ', cur)) {
        state=121;
        cur += 1;
        continue;
      }
      if(str,startsWith('ブー', cur)) return true;
      pos++; cur = pos; continue;
    case 121:
      if(str,startsWith('ッド', cur)) return true;
      if(str,startsWith('ブル', cur)) return true;
      pos++; cur = pos; continue;
    case 122:
      if(str,startsWith('テイ', cur)) return true;
      if(str,startsWith('ペルト', cur)) return true;
      pos++; cur = pos; continue;
    case 123:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('ロロ', cur)) return true;
      pos++; cur = pos; continue;
    case 124:
      if(str,startsWith('ズマオウ', cur)) return true;
      if(str.startsWith('リ', cur)) {
        state=125;
        cur += 1;
        continue;
      }
      if(str,startsWith('ンノーン', cur)) return true;
      if(str,startsWith('チャモ', cur)) return true;
      if(str,startsWith('ゲハント', cur)) return true;
      if(str.startsWith('メ', cur)) {
        state=126;
        cur += 1;
        continue;
      }
      if(str,startsWith('サナン', cur)) return true;
      if(str,startsWith('ノプス', cur)) return true;
      if(str,startsWith('ーマルド', cur)) return true;
      if(str,startsWith('ブソル', cur)) return true;
      if(str,startsWith('グノム', cur)) return true;
      if(str,startsWith('ルセウス', cur)) return true;
      pos++; cur = pos; continue;
    case 125:
      if(str,startsWith('アドス', cur)) return true;
      if(str,startsWith('ゲイツ', cur)) return true;
      pos++; cur = pos; continue;
    case 126:
      if(str,startsWith('タマ', cur)) return true;
      if(str,startsWith('モース', cur)) return true;
      pos++; cur = pos; continue;
    case 127:
      if(str,startsWith('ギア', cur)) return true;
      if(str,startsWith('ージュラ', cur)) return true;
      if(str,startsWith('ンパッパ', cur)) return true;
      if(str,startsWith('リリ', cur)) return true;
      if(str,startsWith('ナトーン', cur)) return true;
      if(str,startsWith('クシオ', cur)) return true;
      if(str,startsWith('カリオ', cur)) return true;
      pos++; cur = pos; continue;
    case 128:
      if(str,startsWith('ラッキー', cur)) return true;
      if(str.startsWith('ー', cur)) {
        state=129;
        cur += 1;
        continue;
      }
      if(str,startsWith('ルー', cur)) return true;
      if(str,startsWith('ビィ', cur)) return true;
      if(str,startsWith('イゼル', cur)) return true;
      if(str,startsWith('ニャット', cur)) return true;
      pos++; cur = pos; continue;
    case 129:
      if(str,startsWith('スター', cur)) return true;
      if(str.startsWith('ーバ', cur)) {
        state=130;
        cur += 2;
        continue;
      }
      if(str,startsWith('ピッグ', cur)) return true;
      pos++; cur = pos; continue;
    case 130:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('ン', cur)) return true;
      pos++; cur = pos; continue;
    case 131:
      if(str,startsWith('ニリュウ', cur)) return true;
      if(str.startsWith('ウュ', cur)) {
        state=132;
        cur += 2;
        continue;
      }
      if(str,startsWith('ルタンク', cur)) return true;
      if(str,startsWith('ズゴロウ', cur)) return true;
      if(str,startsWith('ロカロス', cur)) return true;
      if(str.startsWith('ノ', cur)) {
        state=133;
        cur += 1;
        continue;
      }
      if(str,startsWith('ツハニー', cur)) return true;
      if(str.startsWith('ミロ', cur)) {
        state=134;
        cur += 2;
        continue;
      }
      if(str,startsWith('カルゲ', cur)) return true;
      pos++; cur = pos; continue;
    case 132:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('ツー', cur)) return true;
      pos++; cur = pos; continue;
    case 133:
      if(str,startsWith('マダム', cur)) return true;
      if(str,startsWith('ムッチ', cur)) return true;
      pos++; cur = pos; continue;
    case 134:
      if(str,startsWith('ップ', cur)) return true;
      if(str,startsWith('ル', cur)) return true;
      pos++; cur = pos; continue;
    case 135:
      if(str,startsWith('クリュー', cur)) return true;
      if(str,startsWith('ネッコ', cur)) return true;
      if(str,startsWith('ガネール', cur)) return true;
      if(str.startsWith('リ', cur)) {
        state=136;
        cur += 1;
        continue;
      }
      if(str,startsWith('ッサム', cur)) return true;
      if(str,startsWith('ピナス', cur)) return true;
      if(str.startsWith('ス', cur)) {
        state=137;
        cur += 1;
        continue;
      }
      if(str,startsWith('ブネーク', cur)) return true;
      if(str,startsWith('ンテール', cur)) return true;
      if(str,startsWith('ヤシガメ', cur)) return true;
      pos++; cur = pos; continue;
    case 136:
      if(str,startsWith('テヤマ', cur)) return true;
      if(str,startsWith('ーセン', cur)) return true;
      pos++; cur = pos; continue;
    case 137:
      if(str,startsWith('ブレロ', cur)) return true;
      if(str,startsWith('ボー', cur)) return true;
      pos++; cur = pos; continue;
    case 138:
      if(str,startsWith('コリータ', cur)) return true;
      if(str,startsWith('ョンチー', cur)) return true;
      if(str,startsWith('ャーレム', cur)) return true;
      if(str.startsWith('ル', cur)) {
        state=139;
        cur += 1;
        continue;
      }
      if(str,startsWith('リーン', cur)) return true;
      if(str.startsWith('ェリ', cur)) {
        state=140;
        cur += 2;
        continue;
      }
      pos++; cur = pos; continue;
    case 139:
      if(str,startsWith('タリス', cur)) return true;
      if(str,startsWith('ット', cur)) return true;
      pos++; cur = pos; continue;
    case 140:
      if(str,startsWith('ム', cur)) return true;
      if(str,startsWith('ンボ', cur)) return true;
      pos++; cur = pos; continue;
    case 141:
      if(str,startsWith('ウオウ', cur)) return true;
      if(str,startsWith('ーホー', cur)) return true;
      if(str.startsWith('エル', cur)) {
        state=142;
        cur += 2;
        continue;
      }
      pos++; cur = pos; continue;
    case 142:
      if(str,startsWith('オー', cur)) return true;
      if(str,startsWith('コ', cur)) return true;
      pos++; cur = pos; continue;
    case 143:
      if(str,startsWith('ルノズク', cur)) return true;
      if(str,startsWith('ーギラス', cur)) return true;
      if(str,startsWith('マワル', cur)) return true;
      if(str,startsWith('ノワール', cur)) return true;
      pos++; cur = pos; continue;
    case 144:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('オ', cur)) return true;
      pos++; cur = pos; continue;
    case 145:
      if(str,startsWith('オー', cur)) return true;
      if(str,startsWith('マクロー', cur)) return true;
      if(str,startsWith('ケニン', cur)) return true;
      pos++; cur = pos; continue;
    case 146:
      if(str.startsWith('マウ', cur)) {
        state=147;
        cur += 2;
        continue;
      }
      if(str,startsWith('チュール', cur)) return true;
      if(str,startsWith('ックル', cur)) return true;
      if(str.startsWith('ク', cur)) {
        state=148;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 147:
      if(str,startsWith('', cur)) return true;
      if(str,startsWith('ージ', cur)) return true;
      pos++; cur = pos; continue;
    case 148:
      if(str,startsWith('バード', cur)) return true;
      if(str,startsWith('ホーク', cur)) return true;
      pos++; cur = pos; continue;
    case 149:
      if(str,startsWith('ルロック', cur)) return true;
      if(str.startsWith('ーナ', cur)) {
        state=150;
        cur += 2;
        continue;
      }
      pos++; cur = pos; continue;
    case 150:
      if(str,startsWith('ノ', cur)) return true;
      if(str,startsWith('ンス', cur)) return true;
      pos++; cur = pos; continue;
    case 151:
      if(str,startsWith('コッチ', cur)) return true;
      if(str,startsWith('ズパス', cur)) return true;
      if(str,startsWith('クタス', cur)) return true;
      pos++; cur = pos; continue;
    case 152:
      if(str,startsWith('イガー', cur)) return true;
      if(str,startsWith('ンブル', cur)) return true;
      if(str,startsWith('エナ', cur)) return true;
      pos++; cur = pos; continue;
    case 153:
      if(str,startsWith('チニン', cur)) return true;
      if(str,startsWith('ボツボ', cur)) return true;
      pos++; cur = pos; continue;
    case 154:
      if(str,startsWith('ラクロス', cur)) return true;
      if(str,startsWith('ルガー', cur)) return true;
      if(str,startsWith('イガニ', cur)) return true;
      pos++; cur = pos; continue;
    case 155:
      if(str,startsWith('リーラ', cur)) return true;
      if(str,startsWith('ングマ', cur)) return true;
      if(str.startsWith('ー', cur)) {
        state=156;
        cur += 1;
        continue;
      }
      if(str,startsWith('オル', cur)) return true;
      pos++; cur = pos; continue;
    case 156:
      if(str,startsWith('シャン', cur)) return true;
      if(str,startsWith('フィア', cur)) return true;
      pos++; cur = pos; continue;
    case 157:
      if(str,startsWith('カニン', cur)) return true;
      if(str,startsWith('ポウオ', cur)) return true;
      pos++; cur = pos; continue;
    case 158:
      if(str,startsWith('グザグマ', cur)) return true;
      if(str,startsWith('ュペッタ', cur)) return true;
      if(str,startsWith('ーランス', cur)) return true;
      if(str,startsWith('ラーチ', cur)) return true;
      if(str,startsWith('バコイル', cur)) return true;
      pos++; cur = pos; continue;
    case 159:
      if(str,startsWith('オラント', cur)) return true;
      if(str,startsWith('ンドール', cur)) return true;
      pos++; cur = pos; continue;
    case 160:
      if(str.startsWith('ラ', cur)) {
        state=161;
        cur += 1;
        continue;
      }
      if(str.startsWith('レ', cur)) {
        state=162;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 161:
      if(str,startsWith('イオン', cur)) return true;
      if(str,startsWith('ードン', cur)) return true;
      pos++; cur = pos; continue;
    case 162:
      if(str,startsWith('イシア', cur)) return true;
      if(str,startsWith('ッグル', cur)) return true;
      pos++; cur = pos; continue;
    default: throw new Exception('Unknown state: '+state);
  }
  return false;
}
