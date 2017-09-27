var matcher = function(str) {
  let state = 0;
  let cur = str;
  for(;str.length > 0;) switch(state) {
    case 0:
      if(cur.startsWith('ギ')) {
        state=1;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ヒ')) {
        state=4;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ド')) {
        state=6;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ゼニガメ')) return true;
      if(cur.startsWith('カ')) {
        state=12;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('キ')) {
        state=18;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ト')) {
        state=22;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('バ')) {
        state=26;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ビ')) {
        state=29;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('コ')) {
        state=31;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ス')) {
        state=34;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ポ')) {
        state=37;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ピ')) {
        state=40;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ラ')) {
        state=42;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('オ')) {
        state=46;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ボ')) {
        state=50;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ドンサ')) {
        state=53;
        cur = cur.slice(3);
        continue;
      }
      if(cur.startsWith('ドニ')) {
        state=54;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ドニ')) {
        state=55;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ロ')) {
        state=56;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('プ')) {
        state=57;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ズ')) {
        state=58;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ゴ')) {
        state=59;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ナ')) {
        state=64;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ク')) {
        state=67;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('パ')) {
        state=68;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('モ')) {
        state=71;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('デ')) {
        state=72;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ダ')) {
        state=74;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ニ')) {
        state=76;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ペ')) {
        state=79;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('マ')) {
        state=80;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ガ')) {
        state=86;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ウ')) {
        state=88;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ケ')) {
        state=91;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ユ')) {
        state=92;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('フ')) {
        state=94;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ワ')) {
        state=96;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('メ')) {
        state=97;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('イ')) {
        state=100;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ヤ')) {
        state=101;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('レ')) {
        state=104;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ュジ')) {
        state=107;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ベ')) {
        state=108;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('シ')) {
        state=111;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ゲンガー')) return true;
      if(cur.startsWith('タ')) {
        state=113;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('サ')) {
        state=115;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('エ')) {
        state=119;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ア')) {
        state=124;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ル')) {
        state=127;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ブ')) {
        state=128;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ミ')) {
        state=131;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ハ')) {
        state=135;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('チ')) {
        state=138;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ホ')) {
        state=141;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ヨ')) {
        state=143;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ィテイネ')) {
        state=144;
        cur = cur.slice(4);
        continue;
      }
      if(cur.startsWith('ヌ')) {
        state=145;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ム')) {
        state=146;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ソ')) {
        state=149;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ノ')) {
        state=151;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ラグ')) {
        state=152;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ツ')) {
        state=153;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ヘ')) {
        state=154;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('リ')) {
        state=155;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('テッ')) {
        state=157;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('セレビィ')) return true;
      if(cur.startsWith('ジ')) {
        state=158;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ザングース')) return true;
      if(cur.startsWith('ネ')) {
        state=159;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('グ')) {
        state=160;
        cur = cur.slice(1);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 1:
      if(cur.startsWith('シフ')) {
        state=2;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ャ')) {
        state=3;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ラティナ')) return true;
      str = str.slice(1); cur = str; continue;
    case 2:
      if(cur.startsWith('ソウ')) return true;
      if(cur.startsWith('ダネ')) return true;
      if(cur.startsWith('バナ')) return true;
      str = str.slice(1); cur = str; continue;
    case 3:
      if(cur.startsWith('ラドス')) return true;
      if(cur.startsWith('ロップ')) return true;
      str = str.slice(1); cur = str; continue;
    case 4:
      if(cur.startsWith('ト')) {
        state=5;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ノアラシ')) return true;
      if(cur.startsWith('マナッツ')) return true;
      if(cur.startsWith('メグマ')) return true;
      if(cur.startsWith('ンバス')) return true;
      if(cur.startsWith('コザル')) return true;
      if(cur.startsWith('ポポタス')) return true;
      if(cur.startsWith('ードラン')) return true;
      str = str.slice(1); cur = str; continue;
    case 5:
      if(cur.startsWith('カゲ')) return true;
      if(cur.startsWith('デマン')) return true;
      str = str.slice(1); cur = str; continue;
    case 6:
      if(cur.startsWith('ク')) {
        state=7;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ー')) {
        state=8;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ガース')) return true;
      if(cur.startsWith('ン')) {
        state=11;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ゴーム')) return true;
      if(cur.startsWith('ジョッチ')) return true;
      if(cur.startsWith('タイトス')) return true;
      if(cur.startsWith('ラピオン')) return true;
      if(cur.startsWith('サイドン')) return true;
      str = str.slice(1); cur = str; continue;
    case 7:
      if(cur.startsWith('クラゲ')) return true;
      if(cur.startsWith('ケイル')) return true;
      if(cur.startsWith('ロッグ')) return true;
      str = str.slice(1); cur = str; continue;
    case 8:
      if(cur.startsWith('ザリ')) {
        state=9;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ド')) {
        state=10;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ブル')) return true;
      if(cur.startsWith('ミラー')) return true;
      if(cur.startsWith('タクン')) return true;
      str = str.slice(1); cur = str; continue;
    case 9:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('ン')) return true;
      str = str.slice(1); cur = str; continue;
    case 10:
      if(cur.startsWith('リオ')) return true;
      if(cur.startsWith('ー')) return true;
      str = str.slice(1); cur = str; continue;
    case 11:
      if(cur.startsWith('ファン')) return true;
      if(cur.startsWith('メル')) return true;
      if(cur.startsWith('カラス')) return true;
      str = str.slice(1); cur = str; continue;
    case 12:
      if(cur.startsWith('イ')) {
        state=13;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('メ')) {
        state=15;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('モネギ')) return true;
      if(cur.startsWith('ラ')) {
        state=16;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('トブ')) {
        state=17;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ビゴン')) return true;
      if(cur.startsWith('ポエラー')) return true;
      if(cur.startsWith('クレオン')) return true;
      if(cur.startsWith('ゲボウズ')) return true;
      if(cur.startsWith('バルドン')) return true;
      str = str.slice(1); cur = str; continue;
    case 13:
      if(cur.startsWith('リ')) {
        state=14;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ロス')) return true;
      if(cur.startsWith('オーガ')) return true;
      str = str.slice(1); cur = str; continue;
    case 14:
      if(cur.startsWith('キー')) return true;
      if(cur.startsWith('ュー')) return true;
      str = str.slice(1); cur = str; continue;
    case 15:
      if(cur.startsWith('ックス')) return true;
      if(cur.startsWith('ール')) return true;
      str = str.slice(1); cur = str; continue;
    case 16:
      if(cur.startsWith('カラ')) return true;
      if(cur.startsWith('サリス')) return true;
      if(cur.startsWith('ナクシ')) return true;
      str = str.slice(1); cur = str; continue;
    case 17:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('プス')) return true;
      str = str.slice(1); cur = str; continue;
    case 18:
      if(cur.startsWith('ャ')) {
        state=19;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ュウコン')) return true;
      if(cur.startsWith('ング')) {
        state=20;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('レイハナ')) return true;
      if(cur.startsWith('マワリ')) return true;
      if(cur.startsWith('リンリキ')) return true;
      if(cur.startsWith('モリ')) return true;
      if(cur.startsWith('ルリア')) return true;
      if(cur.startsWith('ノ')) {
        state=21;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('バニア')) return true;
      str = str.slice(1); cur = str; continue;
    case 19:
      if(cur.startsWith('タピー')) return true;
      if(cur.startsWith('モメ')) return true;
      str = str.slice(1); cur = str; continue;
    case 20:
      if(cur.startsWith('ドラ')) return true;
      if(cur.startsWith('ラー')) return true;
      str = str.slice(1); cur = str; continue;
    case 21:
      if(cur.startsWith('ガッサ')) return true;
      if(cur.startsWith('ココ')) return true;
      str = str.slice(1); cur = str; continue;
    case 22:
      if(cur.startsWith('サキント')) return true;
      if(cur.startsWith('ランセル')) return true;
      if(cur.startsWith('ゲ')) {
        state=23;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ロピウス')) return true;
      if(cur.startsWith('ド')) {
        state=24;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('リ')) {
        state=25;
        cur = cur.slice(1);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 23:
      if(cur.startsWith('チック')) return true;
      if(cur.startsWith('ピー')) return true;
      if(cur.startsWith('キッス')) return true;
      str = str.slice(1); cur = str; continue;
    case 24:
      if(cur.startsWith('グラー')) return true;
      if(cur.startsWith('ゼルガ')) return true;
      str = str.slice(1); cur = str; continue;
    case 25:
      if(cur.startsWith('デプス')) return true;
      if(cur.startsWith('トドン')) return true;
      str = str.slice(1); cur = str; continue;
    case 26:
      if(cur.startsWith('タフリー')) return true;
      if(cur.startsWith('リヤード')) return true;
      if(cur.startsWith('ク')) {
        state=27;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ル')) {
        state=28;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ンギラス')) return true;
      if(cur.startsWith('シャーモ')) return true;
      if(cur.startsWith('ネブー')) return true;
      str = str.slice(1); cur = str; continue;
    case 27:
      if(cur.startsWith('オング')) return true;
      if(cur.startsWith('フーン')) return true;
      if(cur.startsWith('ーダ')) return true;
      str = str.slice(1); cur = str; continue;
    case 28:
      if(cur.startsWith('キー')) return true;
      if(cur.startsWith('ビート')) return true;
      str = str.slice(1); cur = str; continue;
    case 29:
      if(cur.startsWith('リリダマ')) return true;
      if(cur.startsWith('ー')) {
        state=30;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ブラーバ')) return true;
      if(cur.startsWith('ッパ')) return true;
      str = str.slice(1); cur = str; continue;
    case 30:
      if(cur.startsWith('ダル')) return true;
      if(cur.startsWith('ドル')) return true;
      if(cur.startsWith('クイン')) return true;
      str = str.slice(1); cur = str; continue;
    case 31:
      if(cur.startsWith('クーン')) return true;
      if(cur.startsWith('ラッタ')) return true;
      if(cur.startsWith('ンパン')) return true;
      if(cur.startsWith('ダック')) return true;
      if(cur.startsWith('イ')) {
        state=32;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ノハナ')) return true;
      if(cur.startsWith('コドラ')) return true;
      if(cur.startsWith('ドラ')) return true;
      if(cur.startsWith('ータス')) return true;
      if(cur.startsWith('モルー')) return true;
      if(cur.startsWith('ロ')) {
        state=33;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('リンク')) return true;
      str = str.slice(1); cur = str; continue;
    case 32:
      if(cur.startsWith('キング')) return true;
      if(cur.startsWith('ル')) return true;
      str = str.slice(1); cur = str; continue;
    case 33:
      if(cur.startsWith('トック')) return true;
      if(cur.startsWith('ボーシ')) return true;
      str = str.slice(1); cur = str; continue;
    case 34:
      if(cur.startsWith('ピアー')) return true;
      if(cur.startsWith('リー')) {
        state=35;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ターミー')) return true;
      if(cur.startsWith('トライク')) return true;
      if(cur.startsWith('イクン')) return true;
      if(cur.startsWith('バメ')) return true;
      if(cur.startsWith('ボミー')) return true;
      if(cur.startsWith('カ')) {
        state=36;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('コルピ')) return true;
      str = str.slice(1); cur = str; continue;
    case 35:
      if(cur.startsWith('パー')) return true;
      if(cur.startsWith('プ')) return true;
      str = str.slice(1); cur = str; continue;
    case 36:
      if(cur.startsWith('タンク')) return true;
      if(cur.startsWith('ンプー')) return true;
      str = str.slice(1); cur = str; continue;
    case 37:
      if(cur.startsWith('ッ')) {
        state=38;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ニータ')) return true;
      if(cur.startsWith('ンゴリ')) {
        state=39;
        cur = cur.slice(3);
        continue;
      }
      if(cur.startsWith('ポッコ')) return true;
      if(cur.startsWith('チエナ')) return true;
      if(cur.startsWith('ワルン')) return true;
      if(cur.startsWith('リゴンZ')) return true;
      str = str.slice(1); cur = str; continue;
    case 38:
      if(cur.startsWith('チャマ')) return true;
      if(cur.startsWith('ポ')) return true;
      if(cur.startsWith('タイシ')) return true;
      str = str.slice(1); cur = str; continue;
    case 39:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('2')) return true;
      str = str.slice(1); cur = str; continue;
    case 40:
      if(cur.startsWith('カチュウ')) return true;
      if(cur.startsWith('ジョ')) {
        state=41;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ッピ')) return true;
      if(cur.startsWith('クシー')) return true;
      if(cur.startsWith('チュー')) return true;
      if(cur.startsWith('ィ')) return true;
      if(cur.startsWith('ンプク')) return true;
      str = str.slice(1); cur = str; continue;
    case 41:
      if(cur.startsWith('ット')) return true;
      if(cur.startsWith('ン')) return true;
      str = str.slice(1); cur = str; continue;
    case 42:
      if(cur.startsWith('イ')) {
        state=43;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ッ')) {
        state=44;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('フレシア')) return true;
      if(cur.startsWith('プラス')) return true;
      if(cur.startsWith('ンターン')) return true;
      if(cur.startsWith('グラージ')) return true;
      if(cur.startsWith('ルトス')) return true;
      if(cur.startsWith('クライ')) return true;
      if(cur.startsWith('ブカス')) return true;
      if(cur.startsWith('ティ')) {
        state=45;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ムパルド')) return true;
      str = str.slice(1); cur = str; continue;
    case 43:
      if(cur.startsWith('コウ')) return true;
      if(cur.startsWith('チュウ')) return true;
      if(cur.startsWith('ボルト')) return true;
      str = str.slice(1); cur = str; continue;
    case 44:
      if(cur.startsWith('キー')) return true;
      if(cur.startsWith('タ')) return true;
      str = str.slice(1); cur = str; continue;
    case 45:
      if(cur.startsWith('アス')) return true;
      if(cur.startsWith('オス')) return true;
      str = str.slice(1); cur = str; continue;
    case 46:
      if(cur.startsWith('コリザル')) return true;
      if(cur.startsWith('ニ')) {
        state=47;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ム')) {
        state=48;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ーダイル')) return true;
      if(cur.startsWith('タチ')) return true;
      if(cur.startsWith('オ')) {
        state=49;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('クタン')) return true;
      if(cur.startsWith('ドシシ')) return true;
      str = str.slice(1); cur = str; continue;
    case 47:
      if(cur.startsWith('スズメ')) return true;
      if(cur.startsWith('ドリル')) return true;
      if(cur.startsWith('ゴーリ')) return true;
      str = str.slice(1); cur = str; continue;
    case 48:
      if(cur.startsWith('スター')) return true;
      if(cur.startsWith('ナイト')) return true;
      str = str.slice(1); cur = str; continue;
    case 49:
      if(cur.startsWith('スバメ')) return true;
      if(cur.startsWith('タチ')) return true;
      str = str.slice(1); cur = str; continue;
    case 50:
      if(cur.startsWith('スゴドラ')) return true;
      if(cur.startsWith('ー')) {
        state=51;
        cur = cur.slice(1);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 51:
      if(cur.startsWith('ア')) {
        state=52;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('マンダ')) return true;
      str = str.slice(1); cur = str; continue;
    case 52:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('ック')) return true;
      str = str.slice(1); cur = str; continue;
    case 53:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('パン')) return true;
      str = str.slice(1); cur = str; continue;
    case 54:
      if(cur.startsWith('ラン♀')) return true;
      if(cur.startsWith('リーナ')) return true;
      if(cur.startsWith('クイン')) return true;
      str = str.slice(1); cur = str; continue;
    case 55:
      if(cur.startsWith('ラン♂')) return true;
      if(cur.startsWith('リーノ')) return true;
      if(cur.startsWith('キング')) return true;
      str = str.slice(1); cur = str; continue;
    case 56:
      if(cur.startsWith('コン')) return true;
      if(cur.startsWith('ゼリア')) return true;
      if(cur.startsWith('ズレイド')) return true;
      if(cur.startsWith('トム')) return true;
      str = str.slice(1); cur = str; continue;
    case 57:
      if(cur.startsWith('クリン')) return true;
      if(cur.startsWith('リン')) return true;
      if(cur.startsWith('テラ')) return true;
      if(cur.startsWith('プリン')) return true;
      if(cur.startsWith('ラスル')) return true;
      str = str.slice(1); cur = str; continue;
    case 58:
      if(cur.startsWith('ガイドス')) return true;
      if(cur.startsWith('バット')) return true;
      str = str.slice(1); cur = str; continue;
    case 59:
      if(cur.startsWith('ル')) {
        state=60;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ー')) {
        state=61;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ロー')) {
        state=63;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('マゾウ')) return true;
      if(cur.startsWith('ニョニョ')) return true;
      if(cur.startsWith('クリン')) return true;
      if(cur.startsWith('ウカザル')) return true;
      if(cur.startsWith('ンベ')) return true;
      str = str.slice(1); cur = str; continue;
    case 60:
      if(cur.startsWith('ダック')) return true;
      if(cur.startsWith('バット')) return true;
      str = str.slice(1); cur = str; continue;
    case 61:
      if(cur.startsWith('ス')) {
        state=62;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('リキー')) return true;
      str = str.slice(1); cur = str; continue;
    case 62:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('ト')) return true;
      str = str.slice(1); cur = str; continue;
    case 63:
      if(cur.startsWith('ニャ')) return true;
      if(cur.startsWith('ン')) return true;
      str = str.slice(1); cur = str; continue;
    case 64:
      if(cur.startsWith('ゾノクサ')) return true;
      if(cur.startsWith('ッ')) {
        state=65;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('マ')) {
        state=66;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('エトル')) return true;
      str = str.slice(1); cur = str; continue;
    case 65:
      if(cur.startsWith('クラー')) return true;
      if(cur.startsWith('シー')) return true;
      str = str.slice(1); cur = str; continue;
    case 66:
      if(cur.startsWith('ケロ')) return true;
      if(cur.startsWith('ズン')) return true;
      str = str.slice(1); cur = str; continue;
    case 67:
      if(cur.startsWith('サイハナ')) return true;
      if(cur.startsWith('ラブ')) return true;
      if(cur.startsWith('ロバット')) return true;
      if(cur.startsWith('ヌギダマ')) return true;
      if(cur.startsWith('チート')) return true;
      if(cur.startsWith('レセリア')) return true;
      str = str.slice(1); cur = str; continue;
    case 68:
      if(cur.startsWith('ウワウ')) return true;
      if(cur.startsWith('ラ')) {
        state=69;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ル')) {
        state=70;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ッチール')) return true;
      if(cur.startsWith('ールル')) return true;
      if(cur.startsWith('チリス')) return true;
      str = str.slice(1); cur = str; continue;
    case 69:
      if(cur.startsWith('ス')) return true;
      if(cur.startsWith('セクト')) return true;
      str = str.slice(1); cur = str; continue;
    case 70:
      if(cur.startsWith('キア')) return true;
      if(cur.startsWith('シェン')) return true;
      str = str.slice(1); cur = str; continue;
    case 71:
      if(cur.startsWith('ルフォン')) return true;
      if(cur.startsWith('ンジャラ')) return true;
      if(cur.startsWith('ココ')) return true;
      if(cur.startsWith('ウカザル')) return true;
      if(cur.startsWith('ジャンボ')) return true;
      str = str.slice(1); cur = str; continue;
    case 72:
      if(cur.startsWith('ィ')) {
        state=73;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ンリュウ')) return true;
      if(cur.startsWith('リバード')) return true;
      if(cur.startsWith('ルビル')) return true;
      if(cur.startsWith('オキシス')) return true;
      str = str.slice(1); cur = str; continue;
    case 73:
      if(cur.startsWith('アルガ')) return true;
      if(cur.startsWith('グダ')) return true;
      str = str.slice(1); cur = str; continue;
    case 74:
      if(cur.startsWith('グトリオ')) return true;
      if(cur.startsWith('ー')) {
        state=75;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ンバル')) return true;
      if(cur.startsWith('イノーズ')) return true;
      str = str.slice(1); cur = str; continue;
    case 75:
      if(cur.startsWith('クライ')) return true;
      if(cur.startsWith('テング')) return true;
      str = str.slice(1); cur = str; continue;
    case 76:
      if(cur.startsWith('ャ')) {
        state=77;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ロョ')) {
        state=78;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ョロトノ')) return true;
      if(cur.startsWith('ューラ')) return true;
      str = str.slice(1); cur = str; continue;
    case 77:
      if(cur.startsWith('ルマー')) return true;
      if(cur.startsWith('ース')) return true;
      str = str.slice(1); cur = str; continue;
    case 78:
      if(cur.startsWith('ゾ')) return true;
      if(cur.startsWith('モ')) return true;
      if(cur.startsWith('ボン')) return true;
      str = str.slice(1); cur = str; continue;
    case 79:
      if(cur.startsWith('リッパー')) return true;
      if(cur.startsWith('ルシアン')) return true;
      if(cur.startsWith('ラップ')) return true;
      str = str.slice(1); cur = str; continue;
    case 80:
      if(cur.startsWith('ダツボミ')) return true;
      if(cur.startsWith('ン')) {
        state=81;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ル')) {
        state=82;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('タドガス')) return true;
      if(cur.startsWith('グ')) {
        state=83;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ルリ')) {
        state=85;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ッスグマ')) return true;
      if(cur.startsWith('ユルド')) return true;
      if(cur.startsWith('クノシタ')) return true;
      if(cur.startsWith('イナン')) return true;
      if(cur.startsWith('ネネ')) return true;
      if(cur.startsWith('スキッパ')) return true;
      if(cur.startsWith('ニューラ')) return true;
      if(cur.startsWith('ナフィ')) return true;
      str = str.slice(1); cur = str; continue;
    case 81:
      if(cur.startsWith('キー')) return true;
      if(cur.startsWith('タイン')) return true;
      if(cur.startsWith('ムー')) return true;
      str = str.slice(1); cur = str; continue;
    case 82:
      if(cur.startsWith('ノーム')) return true;
      if(cur.startsWith('マイン')) return true;
      str = str.slice(1); cur = str; continue;
    case 83:
      if(cur.startsWith('カルゴ')) return true;
      if(cur.startsWith('マ')) {
        state=84;
        cur = cur.slice(1);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 84:
      if(cur.startsWith('ッグ')) return true;
      if(cur.startsWith('ラシ')) return true;
      str = str.slice(1); cur = str; continue;
    case 85:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('リ')) return true;
      str = str.slice(1); cur = str; continue;
    case 86:
      if(cur.startsWith('ラガラ')) return true;
      if(cur.startsWith('ー')) {
        state=87;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ルーラ')) return true;
      if(cur.startsWith('バイト')) return true;
      if(cur.startsWith('ブリアス')) return true;
      str = str.slice(1); cur = str; continue;
    case 87:
      if(cur.startsWith('ディ')) return true;
      if(cur.startsWith('メイル')) return true;
      str = str.slice(1); cur = str; continue;
    case 88:
      if(cur.startsWith('インディ')) return true;
      if(cur.startsWith('ツ')) {
        state=89;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ソ')) {
        state=90;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('パー')) return true;
      if(cur.startsWith('リムー')) return true;
      str = str.slice(1); cur = str; continue;
    case 89:
      if(cur.startsWith('ドン')) return true;
      if(cur.startsWith('ボット')) return true;
      str = str.slice(1); cur = str; continue;
    case 90:
      if(cur.startsWith('ッキー')) return true;
      if(cur.startsWith('ハチ')) return true;
      str = str.slice(1); cur = str; continue;
    case 91:
      if(cur.startsWith('ンタロス')) return true;
      if(cur.startsWith('ーシィ')) return true;
      if(cur.startsWith('ムッソ')) return true;
      if(cur.startsWith('ッキング')) return true;
      if(cur.startsWith('イコウオ')) return true;
      str = str.slice(1); cur = str; continue;
    case 92:
      if(cur.startsWith('レイドル')) return true;
      if(cur.startsWith('ンゲラー')) return true;
      if(cur.startsWith('キ')) {
        state=93;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('クシー')) return true;
      str = str.slice(1); cur = str; continue;
    case 93:
      if(cur.startsWith('カブリ')) return true;
      if(cur.startsWith('ワラシ')) return true;
      if(cur.startsWith('ノオー')) return true;
      if(cur.startsWith('メノコ')) return true;
      str = str.slice(1); cur = str; continue;
    case 94:
      if(cur.startsWith('リーザー')) return true;
      if(cur.startsWith('ーディン')) return true;
      if(cur.startsWith('ァイヤー')) return true;
      if(cur.startsWith('ォレトス')) return true;
      if(cur.startsWith('ライゴン')) return true;
      if(cur.startsWith('ローゼル')) return true;
      if(cur.startsWith('ワ')) {
        state=95;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('カマル')) return true;
      if(cur.startsWith('ィオネ')) return true;
      str = str.slice(1); cur = str; continue;
    case 95:
      if(cur.startsWith('ライド')) return true;
      if(cur.startsWith('ンテ')) return true;
      str = str.slice(1); cur = str; continue;
    case 96:
      if(cur.startsWith('ニノコ')) return true;
      if(cur.startsWith('ンリキー')) return true;
      if(cur.startsWith('タッコ')) return true;
      if(cur.startsWith('カシャモ')) return true;
      str = str.slice(1); cur = str; continue;
    case 97:
      if(cur.startsWith('タ')) {
        state=98;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ノクラゲ')) return true;
      if(cur.startsWith('ガ')) {
        state=99;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('リープ')) return true;
      str = str.slice(1); cur = str; continue;
    case 98:
      if(cur.startsWith('モン')) return true;
      if(cur.startsWith('ング')) return true;
      if(cur.startsWith('グロス')) return true;
      str = str.slice(1); cur = str; continue;
    case 99:
      if(cur.startsWith('ニウム')) return true;
      if(cur.startsWith('ヤンマ')) return true;
      str = str.slice(1); cur = str; continue;
    case 100:
      if(cur.startsWith('シツブテ')) return true;
      if(cur.startsWith('ワーク')) return true;
      if(cur.startsWith('ーブイ')) return true;
      if(cur.startsWith('トマル')) return true;
      if(cur.startsWith('ノムー')) return true;
      if(cur.startsWith('ルミーゼ')) return true;
      str = str.slice(1); cur = str; continue;
    case 101:
      if(cur.startsWith('ド')) {
        state=102;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ンヤンマ')) return true;
      if(cur.startsWith('ミ')) {
        state=103;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ルキモノ')) return true;
      if(cur.startsWith('ジロン')) return true;
      str = str.slice(1); cur = str; continue;
    case 102:
      if(cur.startsWith('ラン')) return true;
      if(cur.startsWith('ン')) return true;
      if(cur.startsWith('キング')) return true;
      str = str.slice(1); cur = str; continue;
    case 103:
      if(cur.startsWith('カラス')) return true;
      if(cur.startsWith('ラミ')) return true;
      str = str.slice(1); cur = str; continue;
    case 104:
      if(cur.startsWith('アコイル')) return true;
      if(cur.startsWith('ディ')) {
        state=105;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ジ')) {
        state=106;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ックウザ')) return true;
      if(cur.startsWith('ントラー')) return true;
      str = str.slice(1); cur = str; continue;
    case 105:
      if(cur.startsWith('アン')) return true;
      if(cur.startsWith('バ')) return true;
      str = str.slice(1); cur = str; continue;
    case 106:
      if(cur.startsWith('アイス')) return true;
      if(cur.startsWith('ロック')) return true;
      if(cur.startsWith('スチル')) return true;
      if(cur.startsWith('ギガス')) return true;
      str = str.slice(1); cur = str; continue;
    case 107:
      if(cur.startsWith('ゴン')) return true;
      if(cur.startsWith('プトル')) return true;
      if(cur.startsWith('カイン')) return true;
      str = str.slice(1); cur = str; continue;
    case 108:
      if(cur.startsWith('トベ')) {
        state=109;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ロ')) {
        state=110;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('イリーフ')) return true;
      str = str.slice(1); cur = str; continue;
    case 109:
      if(cur.startsWith('ター')) return true;
      if(cur.startsWith('トン')) return true;
      str = str.slice(1); cur = str; continue;
    case 110:
      if(cur.startsWith('ベルト')) return true;
      if(cur.startsWith('リンガ')) return true;
      str = str.slice(1); cur = str; continue;
    case 111:
      if(cur.startsWith('ェ')) {
        state=112;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ードラ')) return true;
      if(cur.startsWith('ャワーズ')) return true;
      if(cur.startsWith('ザリガー')) return true;
      str = str.slice(1); cur = str; continue;
    case 112:
      if(cur.startsWith('イミ')) return true;
      if(cur.startsWith('ルダー')) return true;
      str = str.slice(1); cur = str; continue;
    case 113:
      if(cur.startsWith('ッツー')) return true;
      if(cur.startsWith('マ')) {
        state=114;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ネボー')) return true;
      if(cur.startsWith('ツベイ')) return true;
      if(cur.startsWith('テトプス')) return true;
      str = str.slice(1); cur = str; continue;
    case 114:
      if(cur.startsWith('ザラシ')) return true;
      if(cur.startsWith('タマ')) return true;
      if(cur.startsWith('ンタ')) return true;
      str = str.slice(1); cur = str; continue;
    case 115:
      if(cur.startsWith('イ')) {
        state=116;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ワムラー')) return true;
      if(cur.startsWith('ー')) {
        state=117;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ニーゴ')) return true;
      if(cur.startsWith('ナギラス')) return true;
      if(cur.startsWith('メハダー')) return true;
      if(cur.startsWith('ボネア')) return true;
      if(cur.startsWith('マヨール')) return true;
      if(cur.startsWith('クラビス')) return true;
      str = str.slice(1); cur = str; continue;
    case 116:
      if(cur.startsWith('ドン')) return true;
      if(cur.startsWith('ホーン')) return true;
      str = str.slice(1); cur = str; continue;
    case 117:
      if(cur.startsWith('ダン')) {
        state=118;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ナイト')) return true;
      str = str.slice(1); cur = str; continue;
    case 118:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('ス')) return true;
      str = str.slice(1); cur = str; continue;
    case 119:
      if(cur.startsWith('ビワラー')) return true;
      if(cur.startsWith('レ')) {
        state=120;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('イパム')) return true;
      if(cur.startsWith('ーフィ')) return true;
      if(cur.startsWith('アームド')) return true;
      if(cur.startsWith('ン')) {
        state=122;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('コネ')) {
        state=123;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('テボース')) return true;
      if(cur.startsWith('ルレイド')) return true;
      if(cur.startsWith('ムリット')) return true;
      str = str.slice(1); cur = str; continue;
    case 120:
      if(cur.startsWith('キ')) {
        state=121;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ブー')) return true;
      str = str.slice(1); cur = str; continue;
    case 121:
      if(cur.startsWith('ッド')) return true;
      if(cur.startsWith('ブル')) return true;
      str = str.slice(1); cur = str; continue;
    case 122:
      if(cur.startsWith('テイ')) return true;
      if(cur.startsWith('ペルト')) return true;
      str = str.slice(1); cur = str; continue;
    case 123:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('ロロ')) return true;
      str = str.slice(1); cur = str; continue;
    case 124:
      if(cur.startsWith('ズマオウ')) return true;
      if(cur.startsWith('リ')) {
        state=125;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ンノーン')) return true;
      if(cur.startsWith('チャモ')) return true;
      if(cur.startsWith('ゲハント')) return true;
      if(cur.startsWith('メ')) {
        state=126;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('サナン')) return true;
      if(cur.startsWith('ノプス')) return true;
      if(cur.startsWith('ーマルド')) return true;
      if(cur.startsWith('ブソル')) return true;
      if(cur.startsWith('グノム')) return true;
      if(cur.startsWith('ルセウス')) return true;
      str = str.slice(1); cur = str; continue;
    case 125:
      if(cur.startsWith('アドス')) return true;
      if(cur.startsWith('ゲイツ')) return true;
      str = str.slice(1); cur = str; continue;
    case 126:
      if(cur.startsWith('タマ')) return true;
      if(cur.startsWith('モース')) return true;
      str = str.slice(1); cur = str; continue;
    case 127:
      if(cur.startsWith('ギア')) return true;
      if(cur.startsWith('ージュラ')) return true;
      if(cur.startsWith('ンパッパ')) return true;
      if(cur.startsWith('リリ')) return true;
      if(cur.startsWith('ナトーン')) return true;
      if(cur.startsWith('クシオ')) return true;
      if(cur.startsWith('カリオ')) return true;
      str = str.slice(1); cur = str; continue;
    case 128:
      if(cur.startsWith('ラッキー')) return true;
      if(cur.startsWith('ー')) {
        state=129;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ルー')) return true;
      if(cur.startsWith('ビィ')) return true;
      if(cur.startsWith('イゼル')) return true;
      if(cur.startsWith('ニャット')) return true;
      str = str.slice(1); cur = str; continue;
    case 129:
      if(cur.startsWith('スター')) return true;
      if(cur.startsWith('ーバ')) {
        state=130;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ピッグ')) return true;
      str = str.slice(1); cur = str; continue;
    case 130:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('ン')) return true;
      str = str.slice(1); cur = str; continue;
    case 131:
      if(cur.startsWith('ニリュウ')) return true;
      if(cur.startsWith('ウュ')) {
        state=132;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('ルタンク')) return true;
      if(cur.startsWith('ズゴロウ')) return true;
      if(cur.startsWith('ロカロス')) return true;
      if(cur.startsWith('ノ')) {
        state=133;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ツハニー')) return true;
      if(cur.startsWith('ミロ')) {
        state=134;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('カルゲ')) return true;
      str = str.slice(1); cur = str; continue;
    case 132:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('ツー')) return true;
      str = str.slice(1); cur = str; continue;
    case 133:
      if(cur.startsWith('マダム')) return true;
      if(cur.startsWith('ムッチ')) return true;
      str = str.slice(1); cur = str; continue;
    case 134:
      if(cur.startsWith('ップ')) return true;
      if(cur.startsWith('ル')) return true;
      str = str.slice(1); cur = str; continue;
    case 135:
      if(cur.startsWith('クリュー')) return true;
      if(cur.startsWith('ネッコ')) return true;
      if(cur.startsWith('ガネール')) return true;
      if(cur.startsWith('リ')) {
        state=136;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ッサム')) return true;
      if(cur.startsWith('ピナス')) return true;
      if(cur.startsWith('ス')) {
        state=137;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('ブネーク')) return true;
      if(cur.startsWith('ンテール')) return true;
      if(cur.startsWith('ヤシガメ')) return true;
      str = str.slice(1); cur = str; continue;
    case 136:
      if(cur.startsWith('テヤマ')) return true;
      if(cur.startsWith('ーセン')) return true;
      str = str.slice(1); cur = str; continue;
    case 137:
      if(cur.startsWith('ブレロ')) return true;
      if(cur.startsWith('ボー')) return true;
      str = str.slice(1); cur = str; continue;
    case 138:
      if(cur.startsWith('コリータ')) return true;
      if(cur.startsWith('ョンチー')) return true;
      if(cur.startsWith('ャーレム')) return true;
      if(cur.startsWith('ル')) {
        state=139;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('リーン')) return true;
      if(cur.startsWith('ェリ')) {
        state=140;
        cur = cur.slice(2);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 139:
      if(cur.startsWith('タリス')) return true;
      if(cur.startsWith('ット')) return true;
      str = str.slice(1); cur = str; continue;
    case 140:
      if(cur.startsWith('ム')) return true;
      if(cur.startsWith('ンボ')) return true;
      str = str.slice(1); cur = str; continue;
    case 141:
      if(cur.startsWith('ウオウ')) return true;
      if(cur.startsWith('ーホー')) return true;
      if(cur.startsWith('エル')) {
        state=142;
        cur = cur.slice(2);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 142:
      if(cur.startsWith('オー')) return true;
      if(cur.startsWith('コ')) return true;
      str = str.slice(1); cur = str; continue;
    case 143:
      if(cur.startsWith('ルノズク')) return true;
      if(cur.startsWith('ーギラス')) return true;
      if(cur.startsWith('マワル')) return true;
      if(cur.startsWith('ノワール')) return true;
      str = str.slice(1); cur = str; continue;
    case 144:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('オ')) return true;
      str = str.slice(1); cur = str; continue;
    case 145:
      if(cur.startsWith('オー')) return true;
      if(cur.startsWith('マクロー')) return true;
      if(cur.startsWith('ケニン')) return true;
      str = str.slice(1); cur = str; continue;
    case 146:
      if(cur.startsWith('マウ')) {
        state=147;
        cur = cur.slice(2);
        continue;
      }
      if(cur.startsWith('チュール')) return true;
      if(cur.startsWith('ックル')) return true;
      if(cur.startsWith('ク')) {
        state=148;
        cur = cur.slice(1);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 147:
      if(cur.startsWith('')) return true;
      if(cur.startsWith('ージ')) return true;
      str = str.slice(1); cur = str; continue;
    case 148:
      if(cur.startsWith('バード')) return true;
      if(cur.startsWith('ホーク')) return true;
      str = str.slice(1); cur = str; continue;
    case 149:
      if(cur.startsWith('ルロック')) return true;
      if(cur.startsWith('ーナ')) {
        state=150;
        cur = cur.slice(2);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 150:
      if(cur.startsWith('ノ')) return true;
      if(cur.startsWith('ンス')) return true;
      str = str.slice(1); cur = str; continue;
    case 151:
      if(cur.startsWith('コッチ')) return true;
      if(cur.startsWith('ズパス')) return true;
      if(cur.startsWith('クタス')) return true;
      str = str.slice(1); cur = str; continue;
    case 152:
      if(cur.startsWith('イガー')) return true;
      if(cur.startsWith('ンブル')) return true;
      if(cur.startsWith('エナ')) return true;
      str = str.slice(1); cur = str; continue;
    case 153:
      if(cur.startsWith('チニン')) return true;
      if(cur.startsWith('ボツボ')) return true;
      str = str.slice(1); cur = str; continue;
    case 154:
      if(cur.startsWith('ラクロス')) return true;
      if(cur.startsWith('ルガー')) return true;
      if(cur.startsWith('イガニ')) return true;
      str = str.slice(1); cur = str; continue;
    case 155:
      if(cur.startsWith('リーラ')) return true;
      if(cur.startsWith('ングマ')) return true;
      if(cur.startsWith('ー')) {
        state=156;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('オル')) return true;
      str = str.slice(1); cur = str; continue;
    case 156:
      if(cur.startsWith('シャン')) return true;
      if(cur.startsWith('フィア')) return true;
      str = str.slice(1); cur = str; continue;
    case 157:
      if(cur.startsWith('カニン')) return true;
      if(cur.startsWith('ポウオ')) return true;
      str = str.slice(1); cur = str; continue;
    case 158:
      if(cur.startsWith('グザグマ')) return true;
      if(cur.startsWith('ュペッタ')) return true;
      if(cur.startsWith('ーランス')) return true;
      if(cur.startsWith('ラーチ')) return true;
      if(cur.startsWith('バコイル')) return true;
      str = str.slice(1); cur = str; continue;
    case 159:
      if(cur.startsWith('オラント')) return true;
      if(cur.startsWith('ンドール')) return true;
      str = str.slice(1); cur = str; continue;
    case 160:
      if(cur.startsWith('ラ')) {
        state=161;
        cur = cur.slice(1);
        continue;
      }
      if(cur.startsWith('レ')) {
        state=162;
        cur = cur.slice(1);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 161:
      if(cur.startsWith('イオン')) return true;
      if(cur.startsWith('ードン')) return true;
      str = str.slice(1); cur = str; continue;
    case 162:
      if(cur.startsWith('イシア')) return true;
      if(cur.startsWith('ッグル')) return true;
      str = str.slice(1); cur = str; continue;
    default: throw new Exception('Unknown state: '+state);
  }
  return false;
};

console.log(matcher("ピカチュウ"));
console.log(matcher("ピッ ピカチュウ"));
console.log(matcher("今日も一日がんばるぞい！"));