var matcher = function(str) {
  let state = 0;
  let cur = str;
  for(;;str.length > 0) switch(state) {
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
      if(str.startsWith('ゼニガメ')) return true;
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
      if(str.startsWith('ゲンガー')) return true;
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
      if(str.startsWith('セレビィ')) return true;
      if(cur.startsWith('ジ')) {
        state=158;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ザングース')) return true;
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
      if(str.startsWith('ラティナ')) return true;
      str = str.slice(1); cur = str; continue;
    case 2:
      if(str.startsWith('ソウ')) return true;
      if(str.startsWith('ダネ')) return true;
      if(str.startsWith('バナ')) return true;
      str = str.slice(1); cur = str; continue;
    case 3:
      if(str.startsWith('ラドス')) return true;
      if(str.startsWith('ロップ')) return true;
      str = str.slice(1); cur = str; continue;
    case 4:
      if(cur.startsWith('ト')) {
        state=5;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ノアラシ')) return true;
      if(str.startsWith('マナッツ')) return true;
      if(str.startsWith('メグマ')) return true;
      if(str.startsWith('ンバス')) return true;
      if(str.startsWith('コザル')) return true;
      if(str.startsWith('ポポタス')) return true;
      if(str.startsWith('ードラン')) return true;
      str = str.slice(1); cur = str; continue;
    case 5:
      if(str.startsWith('カゲ')) return true;
      if(str.startsWith('デマン')) return true;
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
      if(str.startsWith('ガース')) return true;
      if(cur.startsWith('ン')) {
        state=11;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ゴーム')) return true;
      if(str.startsWith('ジョッチ')) return true;
      if(str.startsWith('タイトス')) return true;
      if(str.startsWith('ラピオン')) return true;
      if(str.startsWith('サイドン')) return true;
      str = str.slice(1); cur = str; continue;
    case 7:
      if(str.startsWith('クラゲ')) return true;
      if(str.startsWith('ケイル')) return true;
      if(str.startsWith('ロッグ')) return true;
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
      if(str.startsWith('ブル')) return true;
      if(str.startsWith('ミラー')) return true;
      if(str.startsWith('タクン')) return true;
      str = str.slice(1); cur = str; continue;
    case 9:
      if(str.startsWith('')) return true;
      if(str.startsWith('ン')) return true;
      str = str.slice(1); cur = str; continue;
    case 10:
      if(str.startsWith('リオ')) return true;
      if(str.startsWith('ー')) return true;
      str = str.slice(1); cur = str; continue;
    case 11:
      if(str.startsWith('ファン')) return true;
      if(str.startsWith('メル')) return true;
      if(str.startsWith('カラス')) return true;
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
      if(str.startsWith('モネギ')) return true;
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
      if(str.startsWith('ビゴン')) return true;
      if(str.startsWith('ポエラー')) return true;
      if(str.startsWith('クレオン')) return true;
      if(str.startsWith('ゲボウズ')) return true;
      if(str.startsWith('バルドン')) return true;
      str = str.slice(1); cur = str; continue;
    case 13:
      if(cur.startsWith('リ')) {
        state=14;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ロス')) return true;
      if(str.startsWith('オーガ')) return true;
      str = str.slice(1); cur = str; continue;
    case 14:
      if(str.startsWith('キー')) return true;
      if(str.startsWith('ュー')) return true;
      str = str.slice(1); cur = str; continue;
    case 15:
      if(str.startsWith('ックス')) return true;
      if(str.startsWith('ール')) return true;
      str = str.slice(1); cur = str; continue;
    case 16:
      if(str.startsWith('カラ')) return true;
      if(str.startsWith('サリス')) return true;
      if(str.startsWith('ナクシ')) return true;
      str = str.slice(1); cur = str; continue;
    case 17:
      if(str.startsWith('')) return true;
      if(str.startsWith('プス')) return true;
      str = str.slice(1); cur = str; continue;
    case 18:
      if(cur.startsWith('ャ')) {
        state=19;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ュウコン')) return true;
      if(cur.startsWith('ング')) {
        state=20;
        cur = cur.slice(2);
        continue;
      }
      if(str.startsWith('レイハナ')) return true;
      if(str.startsWith('マワリ')) return true;
      if(str.startsWith('リンリキ')) return true;
      if(str.startsWith('モリ')) return true;
      if(str.startsWith('ルリア')) return true;
      if(cur.startsWith('ノ')) {
        state=21;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('バニア')) return true;
      str = str.slice(1); cur = str; continue;
    case 19:
      if(str.startsWith('タピー')) return true;
      if(str.startsWith('モメ')) return true;
      str = str.slice(1); cur = str; continue;
    case 20:
      if(str.startsWith('ドラ')) return true;
      if(str.startsWith('ラー')) return true;
      str = str.slice(1); cur = str; continue;
    case 21:
      if(str.startsWith('ガッサ')) return true;
      if(str.startsWith('ココ')) return true;
      str = str.slice(1); cur = str; continue;
    case 22:
      if(str.startsWith('サキント')) return true;
      if(str.startsWith('ランセル')) return true;
      if(cur.startsWith('ゲ')) {
        state=23;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ロピウス')) return true;
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
      if(str.startsWith('チック')) return true;
      if(str.startsWith('ピー')) return true;
      if(str.startsWith('キッス')) return true;
      str = str.slice(1); cur = str; continue;
    case 24:
      if(str.startsWith('グラー')) return true;
      if(str.startsWith('ゼルガ')) return true;
      str = str.slice(1); cur = str; continue;
    case 25:
      if(str.startsWith('デプス')) return true;
      if(str.startsWith('トドン')) return true;
      str = str.slice(1); cur = str; continue;
    case 26:
      if(str.startsWith('タフリー')) return true;
      if(str.startsWith('リヤード')) return true;
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
      if(str.startsWith('ンギラス')) return true;
      if(str.startsWith('シャーモ')) return true;
      if(str.startsWith('ネブー')) return true;
      str = str.slice(1); cur = str; continue;
    case 27:
      if(str.startsWith('オング')) return true;
      if(str.startsWith('フーン')) return true;
      if(str.startsWith('ーダ')) return true;
      str = str.slice(1); cur = str; continue;
    case 28:
      if(str.startsWith('キー')) return true;
      if(str.startsWith('ビート')) return true;
      str = str.slice(1); cur = str; continue;
    case 29:
      if(str.startsWith('リリダマ')) return true;
      if(cur.startsWith('ー')) {
        state=30;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ブラーバ')) return true;
      if(str.startsWith('ッパ')) return true;
      str = str.slice(1); cur = str; continue;
    case 30:
      if(str.startsWith('ダル')) return true;
      if(str.startsWith('ドル')) return true;
      if(str.startsWith('クイン')) return true;
      str = str.slice(1); cur = str; continue;
    case 31:
      if(str.startsWith('クーン')) return true;
      if(str.startsWith('ラッタ')) return true;
      if(str.startsWith('ンパン')) return true;
      if(str.startsWith('ダック')) return true;
      if(cur.startsWith('イ')) {
        state=32;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ノハナ')) return true;
      if(str.startsWith('コドラ')) return true;
      if(str.startsWith('ドラ')) return true;
      if(str.startsWith('ータス')) return true;
      if(str.startsWith('モルー')) return true;
      if(cur.startsWith('ロ')) {
        state=33;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('リンク')) return true;
      str = str.slice(1); cur = str; continue;
    case 32:
      if(str.startsWith('キング')) return true;
      if(str.startsWith('ル')) return true;
      str = str.slice(1); cur = str; continue;
    case 33:
      if(str.startsWith('トック')) return true;
      if(str.startsWith('ボーシ')) return true;
      str = str.slice(1); cur = str; continue;
    case 34:
      if(str.startsWith('ピアー')) return true;
      if(cur.startsWith('リー')) {
        state=35;
        cur = cur.slice(2);
        continue;
      }
      if(str.startsWith('ターミー')) return true;
      if(str.startsWith('トライク')) return true;
      if(str.startsWith('イクン')) return true;
      if(str.startsWith('バメ')) return true;
      if(str.startsWith('ボミー')) return true;
      if(cur.startsWith('カ')) {
        state=36;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('コルピ')) return true;
      str = str.slice(1); cur = str; continue;
    case 35:
      if(str.startsWith('パー')) return true;
      if(str.startsWith('プ')) return true;
      str = str.slice(1); cur = str; continue;
    case 36:
      if(str.startsWith('タンク')) return true;
      if(str.startsWith('ンプー')) return true;
      str = str.slice(1); cur = str; continue;
    case 37:
      if(cur.startsWith('ッ')) {
        state=38;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ニータ')) return true;
      if(cur.startsWith('ンゴリ')) {
        state=39;
        cur = cur.slice(3);
        continue;
      }
      if(str.startsWith('ポッコ')) return true;
      if(str.startsWith('チエナ')) return true;
      if(str.startsWith('ワルン')) return true;
      if(str.startsWith('リゴンZ')) return true;
      str = str.slice(1); cur = str; continue;
    case 38:
      if(str.startsWith('チャマ')) return true;
      if(str.startsWith('ポ')) return true;
      if(str.startsWith('タイシ')) return true;
      str = str.slice(1); cur = str; continue;
    case 39:
      if(str.startsWith('')) return true;
      if(str.startsWith('2')) return true;
      str = str.slice(1); cur = str; continue;
    case 40:
      if(str.startsWith('カチュウ')) return true;
      if(cur.startsWith('ジョ')) {
        state=41;
        cur = cur.slice(2);
        continue;
      }
      if(str.startsWith('ッピ')) return true;
      if(str.startsWith('クシー')) return true;
      if(str.startsWith('チュー')) return true;
      if(str.startsWith('ィ')) return true;
      if(str.startsWith('ンプク')) return true;
      str = str.slice(1); cur = str; continue;
    case 41:
      if(str.startsWith('ット')) return true;
      if(str.startsWith('ン')) return true;
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
      if(str.startsWith('フレシア')) return true;
      if(str.startsWith('プラス')) return true;
      if(str.startsWith('ンターン')) return true;
      if(str.startsWith('グラージ')) return true;
      if(str.startsWith('ルトス')) return true;
      if(str.startsWith('クライ')) return true;
      if(str.startsWith('ブカス')) return true;
      if(cur.startsWith('ティ')) {
        state=45;
        cur = cur.slice(2);
        continue;
      }
      if(str.startsWith('ムパルド')) return true;
      str = str.slice(1); cur = str; continue;
    case 43:
      if(str.startsWith('コウ')) return true;
      if(str.startsWith('チュウ')) return true;
      if(str.startsWith('ボルト')) return true;
      str = str.slice(1); cur = str; continue;
    case 44:
      if(str.startsWith('キー')) return true;
      if(str.startsWith('タ')) return true;
      str = str.slice(1); cur = str; continue;
    case 45:
      if(str.startsWith('アス')) return true;
      if(str.startsWith('オス')) return true;
      str = str.slice(1); cur = str; continue;
    case 46:
      if(str.startsWith('コリザル')) return true;
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
      if(str.startsWith('ーダイル')) return true;
      if(str.startsWith('タチ')) return true;
      if(cur.startsWith('オ')) {
        state=49;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('クタン')) return true;
      if(str.startsWith('ドシシ')) return true;
      str = str.slice(1); cur = str; continue;
    case 47:
      if(str.startsWith('スズメ')) return true;
      if(str.startsWith('ドリル')) return true;
      if(str.startsWith('ゴーリ')) return true;
      str = str.slice(1); cur = str; continue;
    case 48:
      if(str.startsWith('スター')) return true;
      if(str.startsWith('ナイト')) return true;
      str = str.slice(1); cur = str; continue;
    case 49:
      if(str.startsWith('スバメ')) return true;
      if(str.startsWith('タチ')) return true;
      str = str.slice(1); cur = str; continue;
    case 50:
      if(str.startsWith('スゴドラ')) return true;
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
      if(str.startsWith('マンダ')) return true;
      str = str.slice(1); cur = str; continue;
    case 52:
      if(str.startsWith('')) return true;
      if(str.startsWith('ック')) return true;
      str = str.slice(1); cur = str; continue;
    case 53:
      if(str.startsWith('')) return true;
      if(str.startsWith('パン')) return true;
      str = str.slice(1); cur = str; continue;
    case 54:
      if(str.startsWith('ラン♀')) return true;
      if(str.startsWith('リーナ')) return true;
      if(str.startsWith('クイン')) return true;
      str = str.slice(1); cur = str; continue;
    case 55:
      if(str.startsWith('ラン♂')) return true;
      if(str.startsWith('リーノ')) return true;
      if(str.startsWith('キング')) return true;
      str = str.slice(1); cur = str; continue;
    case 56:
      if(str.startsWith('コン')) return true;
      if(str.startsWith('ゼリア')) return true;
      if(str.startsWith('ズレイド')) return true;
      if(str.startsWith('トム')) return true;
      str = str.slice(1); cur = str; continue;
    case 57:
      if(str.startsWith('クリン')) return true;
      if(str.startsWith('リン')) return true;
      if(str.startsWith('テラ')) return true;
      if(str.startsWith('プリン')) return true;
      if(str.startsWith('ラスル')) return true;
      str = str.slice(1); cur = str; continue;
    case 58:
      if(str.startsWith('ガイドス')) return true;
      if(str.startsWith('バット')) return true;
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
      if(str.startsWith('マゾウ')) return true;
      if(str.startsWith('ニョニョ')) return true;
      if(str.startsWith('クリン')) return true;
      if(str.startsWith('ウカザル')) return true;
      if(str.startsWith('ンベ')) return true;
      str = str.slice(1); cur = str; continue;
    case 60:
      if(str.startsWith('ダック')) return true;
      if(str.startsWith('バット')) return true;
      str = str.slice(1); cur = str; continue;
    case 61:
      if(cur.startsWith('ス')) {
        state=62;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('リキー')) return true;
      str = str.slice(1); cur = str; continue;
    case 62:
      if(str.startsWith('')) return true;
      if(str.startsWith('ト')) return true;
      str = str.slice(1); cur = str; continue;
    case 63:
      if(str.startsWith('ニャ')) return true;
      if(str.startsWith('ン')) return true;
      str = str.slice(1); cur = str; continue;
    case 64:
      if(str.startsWith('ゾノクサ')) return true;
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
      if(str.startsWith('エトル')) return true;
      str = str.slice(1); cur = str; continue;
    case 65:
      if(str.startsWith('クラー')) return true;
      if(str.startsWith('シー')) return true;
      str = str.slice(1); cur = str; continue;
    case 66:
      if(str.startsWith('ケロ')) return true;
      if(str.startsWith('ズン')) return true;
      str = str.slice(1); cur = str; continue;
    case 67:
      if(str.startsWith('サイハナ')) return true;
      if(str.startsWith('ラブ')) return true;
      if(str.startsWith('ロバット')) return true;
      if(str.startsWith('ヌギダマ')) return true;
      if(str.startsWith('チート')) return true;
      if(str.startsWith('レセリア')) return true;
      str = str.slice(1); cur = str; continue;
    case 68:
      if(str.startsWith('ウワウ')) return true;
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
      if(str.startsWith('ッチール')) return true;
      if(str.startsWith('ールル')) return true;
      if(str.startsWith('チリス')) return true;
      str = str.slice(1); cur = str; continue;
    case 69:
      if(str.startsWith('ス')) return true;
      if(str.startsWith('セクト')) return true;
      str = str.slice(1); cur = str; continue;
    case 70:
      if(str.startsWith('キア')) return true;
      if(str.startsWith('シェン')) return true;
      str = str.slice(1); cur = str; continue;
    case 71:
      if(str.startsWith('ルフォン')) return true;
      if(str.startsWith('ンジャラ')) return true;
      if(str.startsWith('ココ')) return true;
      if(str.startsWith('ウカザル')) return true;
      if(str.startsWith('ジャンボ')) return true;
      str = str.slice(1); cur = str; continue;
    case 72:
      if(cur.startsWith('ィ')) {
        state=73;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ンリュウ')) return true;
      if(str.startsWith('リバード')) return true;
      if(str.startsWith('ルビル')) return true;
      if(str.startsWith('オキシス')) return true;
      str = str.slice(1); cur = str; continue;
    case 73:
      if(str.startsWith('アルガ')) return true;
      if(str.startsWith('グダ')) return true;
      str = str.slice(1); cur = str; continue;
    case 74:
      if(str.startsWith('グトリオ')) return true;
      if(cur.startsWith('ー')) {
        state=75;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ンバル')) return true;
      if(str.startsWith('イノーズ')) return true;
      str = str.slice(1); cur = str; continue;
    case 75:
      if(str.startsWith('クライ')) return true;
      if(str.startsWith('テング')) return true;
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
      if(str.startsWith('ョロトノ')) return true;
      if(str.startsWith('ューラ')) return true;
      str = str.slice(1); cur = str; continue;
    case 77:
      if(str.startsWith('ルマー')) return true;
      if(str.startsWith('ース')) return true;
      str = str.slice(1); cur = str; continue;
    case 78:
      if(str.startsWith('ゾ')) return true;
      if(str.startsWith('モ')) return true;
      if(str.startsWith('ボン')) return true;
      str = str.slice(1); cur = str; continue;
    case 79:
      if(str.startsWith('リッパー')) return true;
      if(str.startsWith('ルシアン')) return true;
      if(str.startsWith('ラップ')) return true;
      str = str.slice(1); cur = str; continue;
    case 80:
      if(str.startsWith('ダツボミ')) return true;
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
      if(str.startsWith('タドガス')) return true;
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
      if(str.startsWith('ッスグマ')) return true;
      if(str.startsWith('ユルド')) return true;
      if(str.startsWith('クノシタ')) return true;
      if(str.startsWith('イナン')) return true;
      if(str.startsWith('ネネ')) return true;
      if(str.startsWith('スキッパ')) return true;
      if(str.startsWith('ニューラ')) return true;
      if(str.startsWith('ナフィ')) return true;
      str = str.slice(1); cur = str; continue;
    case 81:
      if(str.startsWith('キー')) return true;
      if(str.startsWith('タイン')) return true;
      if(str.startsWith('ムー')) return true;
      str = str.slice(1); cur = str; continue;
    case 82:
      if(str.startsWith('ノーム')) return true;
      if(str.startsWith('マイン')) return true;
      str = str.slice(1); cur = str; continue;
    case 83:
      if(str.startsWith('カルゴ')) return true;
      if(cur.startsWith('マ')) {
        state=84;
        cur = cur.slice(1);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 84:
      if(str.startsWith('ッグ')) return true;
      if(str.startsWith('ラシ')) return true;
      str = str.slice(1); cur = str; continue;
    case 85:
      if(str.startsWith('')) return true;
      if(str.startsWith('リ')) return true;
      str = str.slice(1); cur = str; continue;
    case 86:
      if(str.startsWith('ラガラ')) return true;
      if(cur.startsWith('ー')) {
        state=87;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ルーラ')) return true;
      if(str.startsWith('バイト')) return true;
      if(str.startsWith('ブリアス')) return true;
      str = str.slice(1); cur = str; continue;
    case 87:
      if(str.startsWith('ディ')) return true;
      if(str.startsWith('メイル')) return true;
      str = str.slice(1); cur = str; continue;
    case 88:
      if(str.startsWith('インディ')) return true;
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
      if(str.startsWith('パー')) return true;
      if(str.startsWith('リムー')) return true;
      str = str.slice(1); cur = str; continue;
    case 89:
      if(str.startsWith('ドン')) return true;
      if(str.startsWith('ボット')) return true;
      str = str.slice(1); cur = str; continue;
    case 90:
      if(str.startsWith('ッキー')) return true;
      if(str.startsWith('ハチ')) return true;
      str = str.slice(1); cur = str; continue;
    case 91:
      if(str.startsWith('ンタロス')) return true;
      if(str.startsWith('ーシィ')) return true;
      if(str.startsWith('ムッソ')) return true;
      if(str.startsWith('ッキング')) return true;
      if(str.startsWith('イコウオ')) return true;
      str = str.slice(1); cur = str; continue;
    case 92:
      if(str.startsWith('レイドル')) return true;
      if(str.startsWith('ンゲラー')) return true;
      if(cur.startsWith('キ')) {
        state=93;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('クシー')) return true;
      str = str.slice(1); cur = str; continue;
    case 93:
      if(str.startsWith('カブリ')) return true;
      if(str.startsWith('ワラシ')) return true;
      if(str.startsWith('ノオー')) return true;
      if(str.startsWith('メノコ')) return true;
      str = str.slice(1); cur = str; continue;
    case 94:
      if(str.startsWith('リーザー')) return true;
      if(str.startsWith('ーディン')) return true;
      if(str.startsWith('ァイヤー')) return true;
      if(str.startsWith('ォレトス')) return true;
      if(str.startsWith('ライゴン')) return true;
      if(str.startsWith('ローゼル')) return true;
      if(cur.startsWith('ワ')) {
        state=95;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('カマル')) return true;
      if(str.startsWith('ィオネ')) return true;
      str = str.slice(1); cur = str; continue;
    case 95:
      if(str.startsWith('ライド')) return true;
      if(str.startsWith('ンテ')) return true;
      str = str.slice(1); cur = str; continue;
    case 96:
      if(str.startsWith('ニノコ')) return true;
      if(str.startsWith('ンリキー')) return true;
      if(str.startsWith('タッコ')) return true;
      if(str.startsWith('カシャモ')) return true;
      str = str.slice(1); cur = str; continue;
    case 97:
      if(cur.startsWith('タ')) {
        state=98;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ノクラゲ')) return true;
      if(cur.startsWith('ガ')) {
        state=99;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('リープ')) return true;
      str = str.slice(1); cur = str; continue;
    case 98:
      if(str.startsWith('モン')) return true;
      if(str.startsWith('ング')) return true;
      if(str.startsWith('グロス')) return true;
      str = str.slice(1); cur = str; continue;
    case 99:
      if(str.startsWith('ニウム')) return true;
      if(str.startsWith('ヤンマ')) return true;
      str = str.slice(1); cur = str; continue;
    case 100:
      if(str.startsWith('シツブテ')) return true;
      if(str.startsWith('ワーク')) return true;
      if(str.startsWith('ーブイ')) return true;
      if(str.startsWith('トマル')) return true;
      if(str.startsWith('ノムー')) return true;
      if(str.startsWith('ルミーゼ')) return true;
      str = str.slice(1); cur = str; continue;
    case 101:
      if(cur.startsWith('ド')) {
        state=102;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ンヤンマ')) return true;
      if(cur.startsWith('ミ')) {
        state=103;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ルキモノ')) return true;
      if(str.startsWith('ジロン')) return true;
      str = str.slice(1); cur = str; continue;
    case 102:
      if(str.startsWith('ラン')) return true;
      if(str.startsWith('ン')) return true;
      if(str.startsWith('キング')) return true;
      str = str.slice(1); cur = str; continue;
    case 103:
      if(str.startsWith('カラス')) return true;
      if(str.startsWith('ラミ')) return true;
      str = str.slice(1); cur = str; continue;
    case 104:
      if(str.startsWith('アコイル')) return true;
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
      if(str.startsWith('ックウザ')) return true;
      if(str.startsWith('ントラー')) return true;
      str = str.slice(1); cur = str; continue;
    case 105:
      if(str.startsWith('アン')) return true;
      if(str.startsWith('バ')) return true;
      str = str.slice(1); cur = str; continue;
    case 106:
      if(str.startsWith('アイス')) return true;
      if(str.startsWith('ロック')) return true;
      if(str.startsWith('スチル')) return true;
      if(str.startsWith('ギガス')) return true;
      str = str.slice(1); cur = str; continue;
    case 107:
      if(str.startsWith('ゴン')) return true;
      if(str.startsWith('プトル')) return true;
      if(str.startsWith('カイン')) return true;
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
      if(str.startsWith('イリーフ')) return true;
      str = str.slice(1); cur = str; continue;
    case 109:
      if(str.startsWith('ター')) return true;
      if(str.startsWith('トン')) return true;
      str = str.slice(1); cur = str; continue;
    case 110:
      if(str.startsWith('ベルト')) return true;
      if(str.startsWith('リンガ')) return true;
      str = str.slice(1); cur = str; continue;
    case 111:
      if(cur.startsWith('ェ')) {
        state=112;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ードラ')) return true;
      if(str.startsWith('ャワーズ')) return true;
      if(str.startsWith('ザリガー')) return true;
      str = str.slice(1); cur = str; continue;
    case 112:
      if(str.startsWith('イミ')) return true;
      if(str.startsWith('ルダー')) return true;
      str = str.slice(1); cur = str; continue;
    case 113:
      if(str.startsWith('ッツー')) return true;
      if(cur.startsWith('マ')) {
        state=114;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ネボー')) return true;
      if(str.startsWith('ツベイ')) return true;
      if(str.startsWith('テトプス')) return true;
      str = str.slice(1); cur = str; continue;
    case 114:
      if(str.startsWith('ザラシ')) return true;
      if(str.startsWith('タマ')) return true;
      if(str.startsWith('ンタ')) return true;
      str = str.slice(1); cur = str; continue;
    case 115:
      if(cur.startsWith('イ')) {
        state=116;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ワムラー')) return true;
      if(cur.startsWith('ー')) {
        state=117;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ニーゴ')) return true;
      if(str.startsWith('ナギラス')) return true;
      if(str.startsWith('メハダー')) return true;
      if(str.startsWith('ボネア')) return true;
      if(str.startsWith('マヨール')) return true;
      if(str.startsWith('クラビス')) return true;
      str = str.slice(1); cur = str; continue;
    case 116:
      if(str.startsWith('ドン')) return true;
      if(str.startsWith('ホーン')) return true;
      str = str.slice(1); cur = str; continue;
    case 117:
      if(cur.startsWith('ダン')) {
        state=118;
        cur = cur.slice(2);
        continue;
      }
      if(str.startsWith('ナイト')) return true;
      str = str.slice(1); cur = str; continue;
    case 118:
      if(str.startsWith('')) return true;
      if(str.startsWith('ス')) return true;
      str = str.slice(1); cur = str; continue;
    case 119:
      if(str.startsWith('ビワラー')) return true;
      if(cur.startsWith('レ')) {
        state=120;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('イパム')) return true;
      if(str.startsWith('ーフィ')) return true;
      if(str.startsWith('アームド')) return true;
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
      if(str.startsWith('テボース')) return true;
      if(str.startsWith('ルレイド')) return true;
      if(str.startsWith('ムリット')) return true;
      str = str.slice(1); cur = str; continue;
    case 120:
      if(cur.startsWith('キ')) {
        state=121;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ブー')) return true;
      str = str.slice(1); cur = str; continue;
    case 121:
      if(str.startsWith('ッド')) return true;
      if(str.startsWith('ブル')) return true;
      str = str.slice(1); cur = str; continue;
    case 122:
      if(str.startsWith('テイ')) return true;
      if(str.startsWith('ペルト')) return true;
      str = str.slice(1); cur = str; continue;
    case 123:
      if(str.startsWith('')) return true;
      if(str.startsWith('ロロ')) return true;
      str = str.slice(1); cur = str; continue;
    case 124:
      if(str.startsWith('ズマオウ')) return true;
      if(cur.startsWith('リ')) {
        state=125;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ンノーン')) return true;
      if(str.startsWith('チャモ')) return true;
      if(str.startsWith('ゲハント')) return true;
      if(cur.startsWith('メ')) {
        state=126;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('サナン')) return true;
      if(str.startsWith('ノプス')) return true;
      if(str.startsWith('ーマルド')) return true;
      if(str.startsWith('ブソル')) return true;
      if(str.startsWith('グノム')) return true;
      if(str.startsWith('ルセウス')) return true;
      str = str.slice(1); cur = str; continue;
    case 125:
      if(str.startsWith('アドス')) return true;
      if(str.startsWith('ゲイツ')) return true;
      str = str.slice(1); cur = str; continue;
    case 126:
      if(str.startsWith('タマ')) return true;
      if(str.startsWith('モース')) return true;
      str = str.slice(1); cur = str; continue;
    case 127:
      if(str.startsWith('ギア')) return true;
      if(str.startsWith('ージュラ')) return true;
      if(str.startsWith('ンパッパ')) return true;
      if(str.startsWith('リリ')) return true;
      if(str.startsWith('ナトーン')) return true;
      if(str.startsWith('クシオ')) return true;
      if(str.startsWith('カリオ')) return true;
      str = str.slice(1); cur = str; continue;
    case 128:
      if(str.startsWith('ラッキー')) return true;
      if(cur.startsWith('ー')) {
        state=129;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ルー')) return true;
      if(str.startsWith('ビィ')) return true;
      if(str.startsWith('イゼル')) return true;
      if(str.startsWith('ニャット')) return true;
      str = str.slice(1); cur = str; continue;
    case 129:
      if(str.startsWith('スター')) return true;
      if(cur.startsWith('ーバ')) {
        state=130;
        cur = cur.slice(2);
        continue;
      }
      if(str.startsWith('ピッグ')) return true;
      str = str.slice(1); cur = str; continue;
    case 130:
      if(str.startsWith('')) return true;
      if(str.startsWith('ン')) return true;
      str = str.slice(1); cur = str; continue;
    case 131:
      if(str.startsWith('ニリュウ')) return true;
      if(cur.startsWith('ウュ')) {
        state=132;
        cur = cur.slice(2);
        continue;
      }
      if(str.startsWith('ルタンク')) return true;
      if(str.startsWith('ズゴロウ')) return true;
      if(str.startsWith('ロカロス')) return true;
      if(cur.startsWith('ノ')) {
        state=133;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ツハニー')) return true;
      if(cur.startsWith('ミロ')) {
        state=134;
        cur = cur.slice(2);
        continue;
      }
      if(str.startsWith('カルゲ')) return true;
      str = str.slice(1); cur = str; continue;
    case 132:
      if(str.startsWith('')) return true;
      if(str.startsWith('ツー')) return true;
      str = str.slice(1); cur = str; continue;
    case 133:
      if(str.startsWith('マダム')) return true;
      if(str.startsWith('ムッチ')) return true;
      str = str.slice(1); cur = str; continue;
    case 134:
      if(str.startsWith('ップ')) return true;
      if(str.startsWith('ル')) return true;
      str = str.slice(1); cur = str; continue;
    case 135:
      if(str.startsWith('クリュー')) return true;
      if(str.startsWith('ネッコ')) return true;
      if(str.startsWith('ガネール')) return true;
      if(cur.startsWith('リ')) {
        state=136;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ッサム')) return true;
      if(str.startsWith('ピナス')) return true;
      if(cur.startsWith('ス')) {
        state=137;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('ブネーク')) return true;
      if(str.startsWith('ンテール')) return true;
      if(str.startsWith('ヤシガメ')) return true;
      str = str.slice(1); cur = str; continue;
    case 136:
      if(str.startsWith('テヤマ')) return true;
      if(str.startsWith('ーセン')) return true;
      str = str.slice(1); cur = str; continue;
    case 137:
      if(str.startsWith('ブレロ')) return true;
      if(str.startsWith('ボー')) return true;
      str = str.slice(1); cur = str; continue;
    case 138:
      if(str.startsWith('コリータ')) return true;
      if(str.startsWith('ョンチー')) return true;
      if(str.startsWith('ャーレム')) return true;
      if(cur.startsWith('ル')) {
        state=139;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('リーン')) return true;
      if(cur.startsWith('ェリ')) {
        state=140;
        cur = cur.slice(2);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 139:
      if(str.startsWith('タリス')) return true;
      if(str.startsWith('ット')) return true;
      str = str.slice(1); cur = str; continue;
    case 140:
      if(str.startsWith('ム')) return true;
      if(str.startsWith('ンボ')) return true;
      str = str.slice(1); cur = str; continue;
    case 141:
      if(str.startsWith('ウオウ')) return true;
      if(str.startsWith('ーホー')) return true;
      if(cur.startsWith('エル')) {
        state=142;
        cur = cur.slice(2);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 142:
      if(str.startsWith('オー')) return true;
      if(str.startsWith('コ')) return true;
      str = str.slice(1); cur = str; continue;
    case 143:
      if(str.startsWith('ルノズク')) return true;
      if(str.startsWith('ーギラス')) return true;
      if(str.startsWith('マワル')) return true;
      if(str.startsWith('ノワール')) return true;
      str = str.slice(1); cur = str; continue;
    case 144:
      if(str.startsWith('')) return true;
      if(str.startsWith('オ')) return true;
      str = str.slice(1); cur = str; continue;
    case 145:
      if(str.startsWith('オー')) return true;
      if(str.startsWith('マクロー')) return true;
      if(str.startsWith('ケニン')) return true;
      str = str.slice(1); cur = str; continue;
    case 146:
      if(cur.startsWith('マウ')) {
        state=147;
        cur = cur.slice(2);
        continue;
      }
      if(str.startsWith('チュール')) return true;
      if(str.startsWith('ックル')) return true;
      if(cur.startsWith('ク')) {
        state=148;
        cur = cur.slice(1);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 147:
      if(str.startsWith('')) return true;
      if(str.startsWith('ージ')) return true;
      str = str.slice(1); cur = str; continue;
    case 148:
      if(str.startsWith('バード')) return true;
      if(str.startsWith('ホーク')) return true;
      str = str.slice(1); cur = str; continue;
    case 149:
      if(str.startsWith('ルロック')) return true;
      if(cur.startsWith('ーナ')) {
        state=150;
        cur = cur.slice(2);
        continue;
      }
      str = str.slice(1); cur = str; continue;
    case 150:
      if(str.startsWith('ノ')) return true;
      if(str.startsWith('ンス')) return true;
      str = str.slice(1); cur = str; continue;
    case 151:
      if(str.startsWith('コッチ')) return true;
      if(str.startsWith('ズパス')) return true;
      if(str.startsWith('クタス')) return true;
      str = str.slice(1); cur = str; continue;
    case 152:
      if(str.startsWith('イガー')) return true;
      if(str.startsWith('ンブル')) return true;
      if(str.startsWith('エナ')) return true;
      str = str.slice(1); cur = str; continue;
    case 153:
      if(str.startsWith('チニン')) return true;
      if(str.startsWith('ボツボ')) return true;
      str = str.slice(1); cur = str; continue;
    case 154:
      if(str.startsWith('ラクロス')) return true;
      if(str.startsWith('ルガー')) return true;
      if(str.startsWith('イガニ')) return true;
      str = str.slice(1); cur = str; continue;
    case 155:
      if(str.startsWith('リーラ')) return true;
      if(str.startsWith('ングマ')) return true;
      if(cur.startsWith('ー')) {
        state=156;
        cur = cur.slice(1);
        continue;
      }
      if(str.startsWith('オル')) return true;
      str = str.slice(1); cur = str; continue;
    case 156:
      if(str.startsWith('シャン')) return true;
      if(str.startsWith('フィア')) return true;
      str = str.slice(1); cur = str; continue;
    case 157:
      if(str.startsWith('カニン')) return true;
      if(str.startsWith('ポウオ')) return true;
      str = str.slice(1); cur = str; continue;
    case 158:
      if(str.startsWith('グザグマ')) return true;
      if(str.startsWith('ュペッタ')) return true;
      if(str.startsWith('ーランス')) return true;
      if(str.startsWith('ラーチ')) return true;
      if(str.startsWith('バコイル')) return true;
      str = str.slice(1); cur = str; continue;
    case 159:
      if(str.startsWith('オラント')) return true;
      if(str.startsWith('ンドール')) return true;
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
      if(str.startsWith('イオン')) return true;
      if(str.startsWith('ードン')) return true;
      str = str.slice(1); cur = str; continue;
    case 162:
      if(str.startsWith('イシア')) return true;
      if(str.startsWith('ッグル')) return true;
      str = str.slice(1); cur = str; continue;
    default: throw new Exception('Unknown state: '+state);
  }
  return false;
};

console.log(matcher("ピカチュウ"));
