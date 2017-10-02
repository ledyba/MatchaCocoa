module.exports=function(orig_str) {
  const length = orig_str.length;
  let state = 0;
  let pos = 0;
  let cur = 0;
  let str = new Array(length);
  for(let i=0;i<length;i++) {
    str[i] = orig_str.charCodeAt(i);
  }
  while(pos < length) switch(state) {
    case 0: // []
      if(str[cur] === 12450) { // [ア]
        state = 1;
        cur += 1;
        continue;
      }
      if(str[cur] === 12452) { // [イ]
        state = 6;
        cur += 1;
        continue;
      }
      if(str[cur] === 12454) { // [ウ]
        state = 7;
        cur += 1;
        continue;
      }
      if(str[cur] === 12456) { // [エ]
        state = 10;
        cur += 1;
        continue;
      }
      if(str[cur] === 12458) { // [オ]
        state = 15;
        cur += 1;
        continue;
      }
      if(str[cur] === 12459) { // [カ]
        state = 19;
        cur += 1;
        continue;
      }
      if(str[cur] === 12460) { // [ガ]
        state = 25;
        cur += 1;
        continue;
      }
      if(str[cur] === 12461) { // [キ]
        state = 27;
        cur += 1;
        continue;
      }
      if(str[cur] === 12462) { // [ギ]
        state = 31;
        cur += 1;
        continue;
      }
      if(str[cur] === 12463) { // [ク]
        state = 33;
        cur += 1;
        continue;
      }
      if(str[cur] === 12464) { // [グ]
        state = 34;
        cur += 1;
        continue;
      }
      if(str[cur] === 12465) { // [ケ]
        state = 38;
        cur += 1;
        continue;
      }
      if(str[cur] === 12466 && str[cur+1] === 12531 && str[cur+2] === 12460 && str[cur+3] === 12540) return true; // [ゲンガー]
      if(str[cur] === 12467) { // [コ]
        state = 39;
        cur += 1;
        continue;
      }
      if(str[cur] === 12468) { // [ゴ]
        state = 42;
        cur += 1;
        continue;
      }
      if(str[cur] === 12469) { // [サ]
        state = 47;
        cur += 1;
        continue;
      }
      if(str[cur] === 12470 && str[cur+1] === 12531 && str[cur+2] === 12464 && str[cur+3] === 12540 && str[cur+4] === 12473) return true; // [ザングース]
      if(str[cur] === 12471) { // [シ]
        state = 52;
        cur += 1;
        continue;
      }
      if(str[cur] === 12472) { // [ジ]
        state = 54;
        cur += 1;
        continue;
      }
      if(str[cur] === 12473) { // [ス]
        state = 56;
        cur += 1;
        continue;
      }
      if(str[cur] === 12474) { // [ズ]
        state = 59;
        cur += 1;
        continue;
      }
      if(str[cur] === 12475 && str[cur+1] === 12524 && str[cur+2] === 12499 && str[cur+3] === 12451) return true; // [セレビィ]
      if(str[cur] === 12476 && str[cur+1] === 12491 && str[cur+2] === 12460 && str[cur+3] === 12513) return true; // [ゼニガメ]
      if(str[cur] === 12477) { // [ソ]
        state = 60;
        cur += 1;
        continue;
      }
      if(str[cur] === 12479) { // [タ]
        state = 62;
        cur += 1;
        continue;
      }
      if(str[cur] === 12480) { // [ダ]
        state = 64;
        cur += 1;
        continue;
      }
      if(str[cur] === 12481) { // [チ]
        state = 66;
        cur += 1;
        continue;
      }
      if(str[cur] === 12484) { // [ツ]
        state = 69;
        cur += 1;
        continue;
      }
      if(str[cur] === 12486 && str[cur+1] === 12483) { // [テッ]
        state = 70;
        cur += 2;
        continue;
      }
      if(str[cur] === 12487) { // [デ]
        state = 71;
        cur += 1;
        continue;
      }
      if(str[cur] === 12488) { // [ト]
        state = 73;
        cur += 1;
        continue;
      }
      if(str[cur] === 12489) { // [ド]
        state = 77;
        cur += 1;
        continue;
      }
      if(str[cur] === 12490) { // [ナ]
        state = 82;
        cur += 1;
        continue;
      }
      if(str[cur] === 12491) { // [ニ]
        state = 85;
        cur += 1;
        continue;
      }
      if(str[cur] === 12492) { // [ヌ]
        state = 91;
        cur += 1;
        continue;
      }
      if(str[cur] === 12493) { // [ネ]
        state = 92;
        cur += 1;
        continue;
      }
      if(str[cur] === 12494) { // [ノ]
        state = 94;
        cur += 1;
        continue;
      }
      if(str[cur] === 12495) { // [ハ]
        state = 95;
        cur += 1;
        continue;
      }
      if(str[cur] === 12496) { // [バ]
        state = 98;
        cur += 1;
        continue;
      }
      if(str[cur] === 12497) { // [パ]
        state = 101;
        cur += 1;
        continue;
      }
      if(str[cur] === 12498) { // [ヒ]
        state = 104;
        cur += 1;
        continue;
      }
      if(str[cur] === 12499) { // [ビ]
        state = 106;
        cur += 1;
        continue;
      }
      if(str[cur] === 12500) { // [ピ]
        state = 108;
        cur += 1;
        continue;
      }
      if(str[cur] === 12501) { // [フ]
        state = 110;
        cur += 1;
        continue;
      }
      if(str[cur] === 12502) { // [ブ]
        state = 113;
        cur += 1;
        continue;
      }
      if(str[cur] === 12503) { // [プ]
        state = 116;
        cur += 1;
        continue;
      }
      if(str[cur] === 12504) { // [ヘ]
        state = 117;
        cur += 1;
        continue;
      }
      if(str[cur] === 12505) { // [ベ]
        state = 118;
        cur += 1;
        continue;
      }
      if(str[cur] === 12506) { // [ペ]
        state = 121;
        cur += 1;
        continue;
      }
      if(str[cur] === 12507) { // [ホ]
        state = 122;
        cur += 1;
        continue;
      }
      if(str[cur] === 12508) { // [ボ]
        state = 124;
        cur += 1;
        continue;
      }
      if(str[cur] === 12509) { // [ポ]
        state = 125;
        cur += 1;
        continue;
      }
      if(str[cur] === 12510) { // [マ]
        state = 128;
        cur += 1;
        continue;
      }
      if(str[cur] === 12511) { // [ミ]
        state = 134;
        cur += 1;
        continue;
      }
      if(str[cur] === 12512) { // [ム]
        state = 138;
        cur += 1;
        continue;
      }
      if(str[cur] === 12513) { // [メ]
        state = 141;
        cur += 1;
        continue;
      }
      if(str[cur] === 12514) { // [モ]
        state = 144;
        cur += 1;
        continue;
      }
      if(str[cur] === 12516) { // [ヤ]
        state = 145;
        cur += 1;
        continue;
      }
      if(str[cur] === 12518) { // [ユ]
        state = 148;
        cur += 1;
        continue;
      }
      if(str[cur] === 12520) { // [ヨ]
        state = 150;
        cur += 1;
        continue;
      }
      if(str[cur] === 12521) { // [ラ]
        state = 151;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522) { // [リ]
        state = 155;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523) { // [ル]
        state = 158;
        cur += 1;
        continue;
      }
      if(str[cur] === 12524) { // [レ]
        state = 159;
        cur += 1;
        continue;
      }
      if(str[cur] === 12525) { // [ロ]
        state = 162;
        cur += 1;
        continue;
      }
      if(str[cur] === 12527) { // [ワ]
        state = 163;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 1: // [ア]
      if(str[cur] === 12464 && str[cur+1] === 12494 && str[cur+2] === 12512) return true; // [アグノム]
      if(str[cur] === 12466 && str[cur+1] === 12495 && str[cur+2] === 12531 && str[cur+3] === 12488) return true; // [アゲハント]
      if(str[cur] === 12469 && str[cur+1] === 12490 && str[cur+2] === 12531) return true; // [アサナン]
      if(str[cur] === 12474 && str[cur+1] === 12510 && str[cur+2] === 12458 && str[cur+3] === 12454) return true; // [アズマオウ]
      if(str[cur] === 12481 && str[cur+1] === 12515 && str[cur+2] === 12514) return true; // [アチャモ]
      if(str[cur] === 12494 && str[cur+1] === 12503 && str[cur+2] === 12473) return true; // [アノプス]
      if(str[cur] === 12502 && str[cur+1] === 12477 && str[cur+2] === 12523) return true; // [アブソル]
      if(str[cur] === 12513) { // [アメ]
        state = 2;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522) { // [アリ]
        state = 3;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523 && str[cur+1] === 12475 && str[cur+2] === 12454 && str[cur+3] === 12473) return true; // [アルセウス]
      if(str[cur] === 12531 && str[cur+1] === 12494 && str[cur+2] === 12540 && str[cur+3] === 12531) return true; // [アンノーン]
      if(str[cur] === 12540) { // [アー]
        state = 4;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 2: // [アメ]
      if(str[cur] === 12479 && str[cur+1] === 12510) return true; // [アメタマ]
      if(str[cur] === 12514 && str[cur+1] === 12540 && str[cur+2] === 12473) return true; // [アメモース]
      pos += 1; cur = pos; continue;
    case 3: // [アリ]
      if(str[cur] === 12450 && str[cur+1] === 12489 && str[cur+2] === 12473) return true; // [アリアドス]
      if(str[cur] === 12466 && str[cur+1] === 12452 && str[cur+2] === 12484) return true; // [アリゲイツ]
      pos += 1; cur = pos; continue;
    case 4: // [アー]
      if(str[cur] === 12508) { // [アーボ]
        state = 5;
        cur += 1;
        continue;
      }
      if(str[cur] === 12510 && str[cur+1] === 12523 && str[cur+2] === 12489) return true; // [アーマルド]
      pos += 2; cur = pos; continue;
    case 5: // [アーボ]
      return true; // [アーボ]
      if(str[cur] === 12483 && str[cur+1] === 12463) return true; // [アーボック]
      pos += 2; cur = pos; continue;
    case 6: // [イ]
      if(str[cur] === 12471 && str[cur+1] === 12484 && str[cur+2] === 12502 && str[cur+3] === 12486) return true; // [イシツブテ]
      if(str[cur] === 12488 && str[cur+1] === 12510 && str[cur+2] === 12523) return true; // [イトマル]
      if(str[cur] === 12494 && str[cur+1] === 12512 && str[cur+2] === 12540) return true; // [イノムー]
      if(str[cur] === 12523 && str[cur+1] === 12511 && str[cur+2] === 12540 && str[cur+3] === 12476) return true; // [イルミーゼ]
      if(str[cur] === 12527 && str[cur+1] === 12540 && str[cur+2] === 12463) return true; // [イワーク]
      if(str[cur] === 12540 && str[cur+1] === 12502 && str[cur+2] === 12452) return true; // [イーブイ]
      pos += 1; cur = pos; continue;
    case 7: // [ウ]
      if(str[cur] === 12452 && str[cur+1] === 12531 && str[cur+2] === 12487 && str[cur+3] === 12451) return true; // [ウインディ]
      if(str[cur] === 12477) { // [ウソ]
        state = 8;
        cur += 1;
        continue;
      }
      if(str[cur] === 12484) { // [ウツ]
        state = 9;
        cur += 1;
        continue;
      }
      if(str[cur] === 12497 && str[cur+1] === 12540) return true; // [ウパー]
      if(str[cur] === 12522 && str[cur+1] === 12512 && str[cur+2] === 12540) return true; // [ウリムー]
      pos += 1; cur = pos; continue;
    case 8: // [ウソ]
      if(str[cur] === 12483 && str[cur+1] === 12461 && str[cur+2] === 12540) return true; // [ウソッキー]
      if(str[cur] === 12495 && str[cur+1] === 12481) return true; // [ウソハチ]
      pos += 1; cur = pos; continue;
    case 9: // [ウツ]
      if(str[cur] === 12489 && str[cur+1] === 12531) return true; // [ウツドン]
      if(str[cur] === 12508 && str[cur+1] === 12483 && str[cur+2] === 12488) return true; // [ウツボット]
      pos += 1; cur = pos; continue;
    case 10: // [エ]
      if(str[cur] === 12450 && str[cur+1] === 12540 && str[cur+2] === 12512 && str[cur+3] === 12489) return true; // [エアームド]
      if(str[cur] === 12452 && str[cur+1] === 12497 && str[cur+2] === 12512) return true; // [エイパム]
      if(str[cur] === 12486 && str[cur+1] === 12508 && str[cur+2] === 12540 && str[cur+3] === 12473) return true; // [エテボース]
      if(str[cur] === 12493 && str[cur+1] === 12467) { // [エネコ]
        state = 11;
        cur += 2;
        continue;
      }
      if(str[cur] === 12499 && str[cur+1] === 12527 && str[cur+2] === 12521 && str[cur+3] === 12540) return true; // [エビワラー]
      if(str[cur] === 12512 && str[cur+1] === 12522 && str[cur+2] === 12483 && str[cur+3] === 12488) return true; // [エムリット]
      if(str[cur] === 12523 && str[cur+1] === 12524 && str[cur+2] === 12452 && str[cur+3] === 12489) return true; // [エルレイド]
      if(str[cur] === 12524) { // [エレ]
        state = 12;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531) { // [エン]
        state = 14;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540 && str[cur+1] === 12501 && str[cur+2] === 12451) return true; // [エーフィ]
      pos += 1; cur = pos; continue;
    case 11: // [エネコ]
      return true; // [エネコ]
      if(str[cur] === 12525 && str[cur+1] === 12525) return true; // [エネコロロ]
      pos += 2; cur = pos; continue;
    case 12: // [エレ]
      if(str[cur] === 12461) { // [エレキ]
        state = 13;
        cur += 1;
        continue;
      }
      if(str[cur] === 12502 && str[cur+1] === 12540) return true; // [エレブー]
      pos += 1; cur = pos; continue;
    case 13: // [エレキ]
      if(str[cur] === 12483 && str[cur+1] === 12489) return true; // [エレキッド]
      if(str[cur] === 12502 && str[cur+1] === 12523) return true; // [エレキブル]
      pos += 2; cur = pos; continue;
    case 14: // [エン]
      if(str[cur] === 12486 && str[cur+1] === 12452) return true; // [エンテイ]
      if(str[cur] === 12506 && str[cur+1] === 12523 && str[cur+2] === 12488) return true; // [エンペルト]
      pos += 2; cur = pos; continue;
    case 15: // [オ]
      if(str[cur] === 12458) { // [オオ]
        state = 16;
        cur += 1;
        continue;
      }
      if(str[cur] === 12463 && str[cur+1] === 12479 && str[cur+2] === 12531) return true; // [オクタン]
      if(str[cur] === 12467 && str[cur+1] === 12522 && str[cur+2] === 12470 && str[cur+3] === 12523) return true; // [オコリザル]
      if(str[cur] === 12479 && str[cur+1] === 12481) return true; // [オタチ]
      if(str[cur] === 12489 && str[cur+1] === 12471 && str[cur+2] === 12471) return true; // [オドシシ]
      if(str[cur] === 12491) { // [オニ]
        state = 17;
        cur += 1;
        continue;
      }
      if(str[cur] === 12512) { // [オム]
        state = 18;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540 && str[cur+1] === 12480 && str[cur+2] === 12452 && str[cur+3] === 12523) return true; // [オーダイル]
      pos += 1; cur = pos; continue;
    case 16: // [オオ]
      if(str[cur] === 12473 && str[cur+1] === 12496 && str[cur+2] === 12513) return true; // [オオスバメ]
      if(str[cur] === 12479 && str[cur+1] === 12481) return true; // [オオタチ]
      pos += 1; cur = pos; continue;
    case 17: // [オニ]
      if(str[cur] === 12468 && str[cur+1] === 12540 && str[cur+2] === 12522) return true; // [オニゴーリ]
      if(str[cur] === 12473 && str[cur+1] === 12474 && str[cur+2] === 12513) return true; // [オニスズメ]
      if(str[cur] === 12489 && str[cur+1] === 12522 && str[cur+2] === 12523) return true; // [オニドリル]
      pos += 1; cur = pos; continue;
    case 18: // [オム]
      if(str[cur] === 12473 && str[cur+1] === 12479 && str[cur+2] === 12540) return true; // [オムスター]
      if(str[cur] === 12490 && str[cur+1] === 12452 && str[cur+2] === 12488) return true; // [オムナイト]
      pos += 1; cur = pos; continue;
    case 19: // [カ]
      if(str[cur] === 12452) { // [カイ]
        state = 20;
        cur += 1;
        continue;
      }
      if(str[cur] === 12463 && str[cur+1] === 12524 && str[cur+2] === 12458 && str[cur+3] === 12531) return true; // [カクレオン]
      if(str[cur] === 12466 && str[cur+1] === 12508 && str[cur+2] === 12454 && str[cur+3] === 12474) return true; // [カゲボウズ]
      if(str[cur] === 12496 && str[cur+1] === 12523 && str[cur+2] === 12489 && str[cur+3] === 12531) return true; // [カバルドン]
      if(str[cur] === 12499 && str[cur+1] === 12468 && str[cur+2] === 12531) return true; // [カビゴン]
      if(str[cur] === 12502 && str[cur+1] === 12488) { // [カブト]
        state = 22;
        cur += 2;
        continue;
      }
      if(str[cur] === 12509 && str[cur+1] === 12456 && str[cur+2] === 12521 && str[cur+3] === 12540) return true; // [カポエラー]
      if(str[cur] === 12513) { // [カメ]
        state = 23;
        cur += 1;
        continue;
      }
      if(str[cur] === 12514 && str[cur+1] === 12493 && str[cur+2] === 12462) return true; // [カモネギ]
      if(str[cur] === 12521) { // [カラ]
        state = 24;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 20: // [カイ]
      if(str[cur] === 12458 && str[cur+1] === 12540 && str[cur+2] === 12460) return true; // [カイオーガ]
      if(str[cur] === 12522) { // [カイリ]
        state = 21;
        cur += 1;
        continue;
      }
      if(str[cur] === 12525 && str[cur+1] === 12473) return true; // [カイロス]
      pos += 1; cur = pos; continue;
    case 21: // [カイリ]
      if(str[cur] === 12461 && str[cur+1] === 12540) return true; // [カイリキー]
      if(str[cur] === 12517 && str[cur+1] === 12540) return true; // [カイリュー]
      pos += 2; cur = pos; continue;
    case 22: // [カブト]
      return true; // [カブト]
      if(str[cur] === 12503 && str[cur+1] === 12473) return true; // [カブトプス]
      pos += 2; cur = pos; continue;
    case 23: // [カメ]
      if(str[cur] === 12483 && str[cur+1] === 12463 && str[cur+2] === 12473) return true; // [カメックス]
      if(str[cur] === 12540 && str[cur+1] === 12523) return true; // [カメール]
      pos += 1; cur = pos; continue;
    case 24: // [カラ]
      if(str[cur] === 12459 && str[cur+1] === 12521) return true; // [カラカラ]
      if(str[cur] === 12469 && str[cur+1] === 12522 && str[cur+2] === 12473) return true; // [カラサリス]
      if(str[cur] === 12490 && str[cur+1] === 12463 && str[cur+2] === 12471) return true; // [カラナクシ]
      pos += 1; cur = pos; continue;
    case 25: // [ガ]
      if(str[cur] === 12496 && str[cur+1] === 12452 && str[cur+2] === 12488) return true; // [ガバイト]
      if(str[cur] === 12502 && str[cur+1] === 12522 && str[cur+2] === 12450 && str[cur+3] === 12473) return true; // [ガブリアス]
      if(str[cur] === 12521 && str[cur+1] === 12460 && str[cur+2] === 12521) return true; // [ガラガラ]
      if(str[cur] === 12523 && str[cur+1] === 12540 && str[cur+2] === 12521) return true; // [ガルーラ]
      if(str[cur] === 12540) { // [ガー]
        state = 26;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 26: // [ガー]
      if(str[cur] === 12487 && str[cur+1] === 12451) return true; // [ガーディ]
      if(str[cur] === 12513 && str[cur+1] === 12452 && str[cur+2] === 12523) return true; // [ガーメイル]
      pos += 2; cur = pos; continue;
    case 27: // [キ]
      if(str[cur] === 12494) { // [キノ]
        state = 28;
        cur += 1;
        continue;
      }
      if(str[cur] === 12496 && str[cur+1] === 12491 && str[cur+2] === 12450) return true; // [キバニア]
      if(str[cur] === 12510 && str[cur+1] === 12527 && str[cur+2] === 12522) return true; // [キマワリ]
      if(str[cur] === 12514 && str[cur+1] === 12522) return true; // [キモリ]
      if(str[cur] === 12515) { // [キャ]
        state = 29;
        cur += 1;
        continue;
      }
      if(str[cur] === 12517 && str[cur+1] === 12454 && str[cur+2] === 12467 && str[cur+3] === 12531) return true; // [キュウコン]
      if(str[cur] === 12522 && str[cur+1] === 12531 && str[cur+2] === 12522 && str[cur+3] === 12461) return true; // [キリンリキ]
      if(str[cur] === 12523 && str[cur+1] === 12522 && str[cur+2] === 12450) return true; // [キルリア]
      if(str[cur] === 12524 && str[cur+1] === 12452 && str[cur+2] === 12495 && str[cur+3] === 12490) return true; // [キレイハナ]
      if(str[cur] === 12531 && str[cur+1] === 12464) { // [キング]
        state = 30;
        cur += 2;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 28: // [キノ]
      if(str[cur] === 12460 && str[cur+1] === 12483 && str[cur+2] === 12469) return true; // [キノガッサ]
      if(str[cur] === 12467 && str[cur+1] === 12467) return true; // [キノココ]
      pos += 1; cur = pos; continue;
    case 29: // [キャ]
      if(str[cur] === 12479 && str[cur+1] === 12500 && str[cur+2] === 12540) return true; // [キャタピー]
      if(str[cur] === 12514 && str[cur+1] === 12513) return true; // [キャモメ]
      pos += 2; cur = pos; continue;
    case 30: // [キング]
      if(str[cur] === 12489 && str[cur+1] === 12521) return true; // [キングドラ]
      if(str[cur] === 12521 && str[cur+1] === 12540) return true; // [キングラー]
      pos += 2; cur = pos; continue;
    case 31: // [ギ]
      if(str[cur] === 12515) { // [ギャ]
        state = 32;
        cur += 1;
        continue;
      }
      if(str[cur] === 12521 && str[cur+1] === 12486 && str[cur+2] === 12451 && str[cur+3] === 12490) return true; // [ギラティナ]
      pos += 1; cur = pos; continue;
    case 32: // [ギャ]
      if(str[cur] === 12521 && str[cur+1] === 12489 && str[cur+2] === 12473) return true; // [ギャラドス]
      if(str[cur] === 12525 && str[cur+1] === 12483 && str[cur+2] === 12503) return true; // [ギャロップ]
      pos += 2; cur = pos; continue;
    case 33: // [ク]
      if(str[cur] === 12469 && str[cur+1] === 12452 && str[cur+2] === 12495 && str[cur+3] === 12490) return true; // [クサイハナ]
      if(str[cur] === 12481 && str[cur+1] === 12540 && str[cur+2] === 12488) return true; // [クチート]
      if(str[cur] === 12492 && str[cur+1] === 12462 && str[cur+2] === 12480 && str[cur+3] === 12510) return true; // [クヌギダマ]
      if(str[cur] === 12521 && str[cur+1] === 12502) return true; // [クラブ]
      if(str[cur] === 12524 && str[cur+1] === 12475 && str[cur+2] === 12522 && str[cur+3] === 12450) return true; // [クレセリア]
      if(str[cur] === 12525 && str[cur+1] === 12496 && str[cur+2] === 12483 && str[cur+3] === 12488) return true; // [クロバット]
      pos += 1; cur = pos; continue;
    case 34: // [グ]
      if(str[cur] === 12521) { // [グラ]
        state = 35;
        cur += 1;
        continue;
      }
      if(str[cur] === 12524) { // [グレ]
        state = 37;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 35: // [グラ]
      if(str[cur] === 12452) { // [グライ]
        state = 36;
        cur += 1;
        continue;
      }
      if(str[cur] === 12456 && str[cur+1] === 12490) return true; // [グラエナ]
      if(str[cur] === 12531 && str[cur+1] === 12502 && str[cur+2] === 12523) return true; // [グランブル]
      if(str[cur] === 12540 && str[cur+1] === 12489 && str[cur+2] === 12531) return true; // [グラードン]
      pos += 1; cur = pos; continue;
    case 36: // [グライ]
      if(str[cur] === 12458 && str[cur+1] === 12531) return true; // [グライオン]
      if(str[cur] === 12460 && str[cur+1] === 12540) return true; // [グライガー]
      pos += 2; cur = pos; continue;
    case 37: // [グレ]
      if(str[cur] === 12452 && str[cur+1] === 12471 && str[cur+2] === 12450) return true; // [グレイシア]
      if(str[cur] === 12483 && str[cur+1] === 12464 && str[cur+2] === 12523) return true; // [グレッグル]
      pos += 1; cur = pos; continue;
    case 38: // [ケ]
      if(str[cur] === 12452 && str[cur+1] === 12467 && str[cur+2] === 12454 && str[cur+3] === 12458) return true; // [ケイコウオ]
      if(str[cur] === 12483 && str[cur+1] === 12461 && str[cur+2] === 12531 && str[cur+3] === 12464) return true; // [ケッキング]
      if(str[cur] === 12512 && str[cur+1] === 12483 && str[cur+2] === 12477) return true; // [ケムッソ]
      if(str[cur] === 12531 && str[cur+1] === 12479 && str[cur+2] === 12525 && str[cur+3] === 12473) return true; // [ケンタロス]
      if(str[cur] === 12540 && str[cur+1] === 12471 && str[cur+2] === 12451) return true; // [ケーシィ]
      pos += 1; cur = pos; continue;
    case 39: // [コ]
      if(str[cur] === 12452) { // [コイ]
        state = 40;
        cur += 1;
        continue;
      }
      if(str[cur] === 12463 && str[cur+1] === 12540 && str[cur+2] === 12531) return true; // [コクーン]
      if(str[cur] === 12467 && str[cur+1] === 12489 && str[cur+2] === 12521) return true; // [ココドラ]
      if(str[cur] === 12480 && str[cur+1] === 12483 && str[cur+2] === 12463) return true; // [コダック]
      if(str[cur] === 12489 && str[cur+1] === 12521) return true; // [コドラ]
      if(str[cur] === 12494 && str[cur+1] === 12495 && str[cur+2] === 12490) return true; // [コノハナ]
      if(str[cur] === 12514 && str[cur+1] === 12523 && str[cur+2] === 12540) return true; // [コモルー]
      if(str[cur] === 12521 && str[cur+1] === 12483 && str[cur+2] === 12479) return true; // [コラッタ]
      if(str[cur] === 12522 && str[cur+1] === 12531 && str[cur+2] === 12463) return true; // [コリンク]
      if(str[cur] === 12525) { // [コロ]
        state = 41;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12497 && str[cur+2] === 12531) return true; // [コンパン]
      if(str[cur] === 12540 && str[cur+1] === 12479 && str[cur+2] === 12473) return true; // [コータス]
      pos += 1; cur = pos; continue;
    case 40: // [コイ]
      if(str[cur] === 12461 && str[cur+1] === 12531 && str[cur+2] === 12464) return true; // [コイキング]
      if(str[cur] === 12523) return true; // [コイル]
      pos += 1; cur = pos; continue;
    case 41: // [コロ]
      if(str[cur] === 12488 && str[cur+1] === 12483 && str[cur+2] === 12463) return true; // [コロトック]
      if(str[cur] === 12508 && str[cur+1] === 12540 && str[cur+2] === 12471) return true; // [コロボーシ]
      pos += 1; cur = pos; continue;
    case 42: // [ゴ]
      if(str[cur] === 12454 && str[cur+1] === 12459 && str[cur+2] === 12470 && str[cur+3] === 12523) return true; // [ゴウカザル]
      if(str[cur] === 12463 && str[cur+1] === 12522 && str[cur+2] === 12531) return true; // [ゴクリン]
      if(str[cur] === 12491 && str[cur+1] === 12519 && str[cur+2] === 12491 && str[cur+3] === 12519) return true; // [ゴニョニョ]
      if(str[cur] === 12510 && str[cur+1] === 12478 && str[cur+2] === 12454) return true; // [ゴマゾウ]
      if(str[cur] === 12523) { // [ゴル]
        state = 43;
        cur += 1;
        continue;
      }
      if(str[cur] === 12525 && str[cur+1] === 12540) { // [ゴロー]
        state = 44;
        cur += 2;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12505) return true; // [ゴンベ]
      if(str[cur] === 12540) { // [ゴー]
        state = 45;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 43: // [ゴル]
      if(str[cur] === 12480 && str[cur+1] === 12483 && str[cur+2] === 12463) return true; // [ゴルダック]
      if(str[cur] === 12496 && str[cur+1] === 12483 && str[cur+2] === 12488) return true; // [ゴルバット]
      pos += 1; cur = pos; continue;
    case 44: // [ゴロー]
      if(str[cur] === 12491 && str[cur+1] === 12515) return true; // [ゴローニャ]
      if(str[cur] === 12531) return true; // [ゴローン]
      pos += 3; cur = pos; continue;
    case 45: // [ゴー]
      if(str[cur] === 12473) { // [ゴース]
        state = 46;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522 && str[cur+1] === 12461 && str[cur+2] === 12540) return true; // [ゴーリキー]
      pos += 2; cur = pos; continue;
    case 46: // [ゴース]
      return true; // [ゴース]
      if(str[cur] === 12488) return true; // [ゴースト]
      pos += 2; cur = pos; continue;
    case 47: // [サ]
      if(str[cur] === 12452) { // [サイ]
        state = 48;
        cur += 1;
        continue;
      }
      if(str[cur] === 12463 && str[cur+1] === 12521 && str[cur+2] === 12499 && str[cur+3] === 12473) return true; // [サクラビス]
      if(str[cur] === 12490 && str[cur+1] === 12462 && str[cur+2] === 12521 && str[cur+3] === 12473) return true; // [サナギラス]
      if(str[cur] === 12491 && str[cur+1] === 12540 && str[cur+2] === 12468) return true; // [サニーゴ]
      if(str[cur] === 12508 && str[cur+1] === 12493 && str[cur+2] === 12450) return true; // [サボネア]
      if(str[cur] === 12510 && str[cur+1] === 12520 && str[cur+2] === 12540 && str[cur+3] === 12523) return true; // [サマヨール]
      if(str[cur] === 12513 && str[cur+1] === 12495 && str[cur+2] === 12480 && str[cur+3] === 12540) return true; // [サメハダー]
      if(str[cur] === 12527 && str[cur+1] === 12512 && str[cur+2] === 12521 && str[cur+3] === 12540) return true; // [サワムラー]
      if(str[cur] === 12531) { // [サン]
        state = 49;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540 && str[cur+1] === 12490 && str[cur+2] === 12452 && str[cur+3] === 12488) return true; // [サーナイト]
      pos += 1; cur = pos; continue;
    case 48: // [サイ]
      if(str[cur] === 12489 && str[cur+1] === 12531) return true; // [サイドン]
      if(str[cur] === 12507 && str[cur+1] === 12540 && str[cur+2] === 12531) return true; // [サイホーン]
      pos += 1; cur = pos; continue;
    case 49: // [サン]
      if(str[cur] === 12480 && str[cur+1] === 12540) { // [サンダー]
        state = 50;
        cur += 2;
        continue;
      }
      if(str[cur] === 12489) { // [サンド]
        state = 51;
        cur += 1;
        continue;
      }
      pos += 2; cur = pos; continue;
    case 50: // [サンダー]
      return true; // [サンダー]
      if(str[cur] === 12473) return true; // [サンダース]
      pos += 4; cur = pos; continue;
    case 51: // [サンド]
      return true; // [サンド]
      if(str[cur] === 12497 && str[cur+1] === 12531) return true; // [サンドパン]
      pos += 2; cur = pos; continue;
    case 52: // [シ]
      if(str[cur] === 12455) { // [シェ]
        state = 53;
        cur += 1;
        continue;
      }
      if(str[cur] === 12470 && str[cur+1] === 12522 && str[cur+2] === 12460 && str[cur+3] === 12540) return true; // [シザリガー]
      if(str[cur] === 12515 && str[cur+1] === 12527 && str[cur+2] === 12540 && str[cur+3] === 12474) return true; // [シャワーズ]
      if(str[cur] === 12540 && str[cur+1] === 12489 && str[cur+2] === 12521) return true; // [シードラ]
      pos += 1; cur = pos; continue;
    case 53: // [シェ]
      if(str[cur] === 12452 && str[cur+1] === 12511) return true; // [シェイミ]
      if(str[cur] === 12523 && str[cur+1] === 12480 && str[cur+2] === 12540) return true; // [シェルダー]
      pos += 2; cur = pos; continue;
    case 54: // [ジ]
      if(str[cur] === 12464 && str[cur+1] === 12470 && str[cur+2] === 12464 && str[cur+3] === 12510) return true; // [ジグザグマ]
      if(str[cur] === 12496 && str[cur+1] === 12467 && str[cur+2] === 12452 && str[cur+3] === 12523) return true; // [ジバコイル]
      if(str[cur] === 12517) { // [ジュ]
        state = 55;
        cur += 1;
        continue;
      }
      if(str[cur] === 12521 && str[cur+1] === 12540 && str[cur+2] === 12481) return true; // [ジラーチ]
      if(str[cur] === 12540 && str[cur+1] === 12521 && str[cur+2] === 12531 && str[cur+3] === 12473) return true; // [ジーランス]
      pos += 1; cur = pos; continue;
    case 55: // [ジュ]
      if(str[cur] === 12459 && str[cur+1] === 12452 && str[cur+2] === 12531) return true; // [ジュカイン]
      if(str[cur] === 12468 && str[cur+1] === 12531) return true; // [ジュゴン]
      if(str[cur] === 12503 && str[cur+1] === 12488 && str[cur+2] === 12523) return true; // [ジュプトル]
      if(str[cur] === 12506 && str[cur+1] === 12483 && str[cur+2] === 12479) return true; // [ジュペッタ]
      pos += 2; cur = pos; continue;
    case 56: // [ス]
      if(str[cur] === 12452 && str[cur+1] === 12463 && str[cur+2] === 12531) return true; // [スイクン]
      if(str[cur] === 12459) { // [スカ]
        state = 57;
        cur += 1;
        continue;
      }
      if(str[cur] === 12467 && str[cur+1] === 12523 && str[cur+2] === 12500) return true; // [スコルピ]
      if(str[cur] === 12479 && str[cur+1] === 12540 && str[cur+2] === 12511 && str[cur+3] === 12540) return true; // [スターミー]
      if(str[cur] === 12488 && str[cur+1] === 12521 && str[cur+2] === 12452 && str[cur+3] === 12463) return true; // [ストライク]
      if(str[cur] === 12496 && str[cur+1] === 12513) return true; // [スバメ]
      if(str[cur] === 12500 && str[cur+1] === 12450 && str[cur+2] === 12540) return true; // [スピアー]
      if(str[cur] === 12508 && str[cur+1] === 12511 && str[cur+2] === 12540) return true; // [スボミー]
      if(str[cur] === 12522 && str[cur+1] === 12540) { // [スリー]
        state = 58;
        cur += 2;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 57: // [スカ]
      if(str[cur] === 12479 && str[cur+1] === 12531 && str[cur+2] === 12463) return true; // [スカタンク]
      if(str[cur] === 12531 && str[cur+1] === 12503 && str[cur+2] === 12540) return true; // [スカンプー]
      pos += 1; cur = pos; continue;
    case 58: // [スリー]
      if(str[cur] === 12497 && str[cur+1] === 12540) return true; // [スリーパー]
      if(str[cur] === 12503) return true; // [スリープ]
      pos += 3; cur = pos; continue;
    case 59: // [ズ]
      if(str[cur] === 12460 && str[cur+1] === 12452 && str[cur+2] === 12489 && str[cur+3] === 12473) return true; // [ズガイドス]
      if(str[cur] === 12496 && str[cur+1] === 12483 && str[cur+2] === 12488) return true; // [ズバット]
      pos += 1; cur = pos; continue;
    case 60: // [ソ]
      if(str[cur] === 12523 && str[cur+1] === 12525 && str[cur+2] === 12483 && str[cur+3] === 12463) return true; // [ソルロック]
      if(str[cur] === 12540 && str[cur+1] === 12490) { // [ソーナ]
        state = 61;
        cur += 2;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 61: // [ソーナ]
      if(str[cur] === 12494) return true; // [ソーナノ]
      if(str[cur] === 12531 && str[cur+1] === 12473) return true; // [ソーナンス]
      pos += 2; cur = pos; continue;
    case 62: // [タ]
      if(str[cur] === 12483 && str[cur+1] === 12484 && str[cur+2] === 12540) return true; // [タッツー]
      if(str[cur] === 12484 && str[cur+1] === 12505 && str[cur+2] === 12452) return true; // [タツベイ]
      if(str[cur] === 12486 && str[cur+1] === 12488 && str[cur+2] === 12503 && str[cur+3] === 12473) return true; // [タテトプス]
      if(str[cur] === 12493 && str[cur+1] === 12508 && str[cur+2] === 12540) return true; // [タネボー]
      if(str[cur] === 12510) { // [タマ]
        state = 63;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 63: // [タマ]
      if(str[cur] === 12470 && str[cur+1] === 12521 && str[cur+2] === 12471) return true; // [タマザラシ]
      if(str[cur] === 12479 && str[cur+1] === 12510) return true; // [タマタマ]
      if(str[cur] === 12531 && str[cur+1] === 12479) return true; // [タマンタ]
      pos += 1; cur = pos; continue;
    case 64: // [ダ]
      if(str[cur] === 12452 && str[cur+1] === 12494 && str[cur+2] === 12540 && str[cur+3] === 12474) return true; // [ダイノーズ]
      if(str[cur] === 12464 && str[cur+1] === 12488 && str[cur+2] === 12522 && str[cur+3] === 12458) return true; // [ダグトリオ]
      if(str[cur] === 12531 && str[cur+1] === 12496 && str[cur+2] === 12523) return true; // [ダンバル]
      if(str[cur] === 12540) { // [ダー]
        state = 65;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 65: // [ダー]
      if(str[cur] === 12463 && str[cur+1] === 12521 && str[cur+2] === 12452) return true; // [ダークライ]
      if(str[cur] === 12486 && str[cur+1] === 12531 && str[cur+2] === 12464) return true; // [ダーテング]
      pos += 2; cur = pos; continue;
    case 66: // [チ]
      if(str[cur] === 12455 && str[cur+1] === 12522) { // [チェリ]
        state = 67;
        cur += 2;
        continue;
      }
      if(str[cur] === 12467 && str[cur+1] === 12522 && str[cur+2] === 12540 && str[cur+3] === 12479) return true; // [チコリータ]
      if(str[cur] === 12515 && str[cur+1] === 12540 && str[cur+2] === 12524 && str[cur+3] === 12512) return true; // [チャーレム]
      if(str[cur] === 12519 && str[cur+1] === 12531 && str[cur+2] === 12481 && str[cur+3] === 12540) return true; // [チョンチー]
      if(str[cur] === 12522 && str[cur+1] === 12540 && str[cur+2] === 12531) return true; // [チリーン]
      if(str[cur] === 12523) { // [チル]
        state = 68;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 67: // [チェリ]
      if(str[cur] === 12512) return true; // [チェリム]
      if(str[cur] === 12531 && str[cur+1] === 12508) return true; // [チェリンボ]
      pos += 2; cur = pos; continue;
    case 68: // [チル]
      if(str[cur] === 12479 && str[cur+1] === 12522 && str[cur+2] === 12473) return true; // [チルタリス]
      if(str[cur] === 12483 && str[cur+1] === 12488) return true; // [チルット]
      pos += 1; cur = pos; continue;
    case 69: // [ツ]
      if(str[cur] === 12481 && str[cur+1] === 12491 && str[cur+2] === 12531) return true; // [ツチニン]
      if(str[cur] === 12508 && str[cur+1] === 12484 && str[cur+2] === 12508) return true; // [ツボツボ]
      pos += 1; cur = pos; continue;
    case 70: // [テッ]
      if(str[cur] === 12459 && str[cur+1] === 12491 && str[cur+2] === 12531) return true; // [テッカニン]
      if(str[cur] === 12509 && str[cur+1] === 12454 && str[cur+2] === 12458) return true; // [テッポウオ]
      pos += 2; cur = pos; continue;
    case 71: // [デ]
      if(str[cur] === 12451) { // [ディ]
        state = 72;
        cur += 1;
        continue;
      }
      if(str[cur] === 12458 && str[cur+1] === 12461 && str[cur+2] === 12471 && str[cur+3] === 12473) return true; // [デオキシス]
      if(str[cur] === 12522 && str[cur+1] === 12496 && str[cur+2] === 12540 && str[cur+3] === 12489) return true; // [デリバード]
      if(str[cur] === 12523 && str[cur+1] === 12499 && str[cur+2] === 12523) return true; // [デルビル]
      if(str[cur] === 12531 && str[cur+1] === 12522 && str[cur+2] === 12517 && str[cur+3] === 12454) return true; // [デンリュウ]
      pos += 1; cur = pos; continue;
    case 72: // [ディ]
      if(str[cur] === 12450 && str[cur+1] === 12523 && str[cur+2] === 12460) return true; // [ディアルガ]
      if(str[cur] === 12464 && str[cur+1] === 12480) return true; // [ディグダ]
      pos += 2; cur = pos; continue;
    case 73: // [ト]
      if(str[cur] === 12466) { // [トゲ]
        state = 74;
        cur += 1;
        continue;
      }
      if(str[cur] === 12469 && str[cur+1] === 12461 && str[cur+2] === 12531 && str[cur+3] === 12488) return true; // [トサキント]
      if(str[cur] === 12489) { // [トド]
        state = 75;
        cur += 1;
        continue;
      }
      if(str[cur] === 12521 && str[cur+1] === 12531 && str[cur+2] === 12475 && str[cur+3] === 12523) return true; // [トランセル]
      if(str[cur] === 12522) { // [トリ]
        state = 76;
        cur += 1;
        continue;
      }
      if(str[cur] === 12525 && str[cur+1] === 12500 && str[cur+2] === 12454 && str[cur+3] === 12473) return true; // [トロピウス]
      pos += 1; cur = pos; continue;
    case 74: // [トゲ]
      if(str[cur] === 12461 && str[cur+1] === 12483 && str[cur+2] === 12473) return true; // [トゲキッス]
      if(str[cur] === 12481 && str[cur+1] === 12483 && str[cur+2] === 12463) return true; // [トゲチック]
      if(str[cur] === 12500 && str[cur+1] === 12540) return true; // [トゲピー]
      pos += 1; cur = pos; continue;
    case 75: // [トド]
      if(str[cur] === 12464 && str[cur+1] === 12521 && str[cur+2] === 12540) return true; // [トドグラー]
      if(str[cur] === 12476 && str[cur+1] === 12523 && str[cur+2] === 12460) return true; // [トドゼルガ]
      pos += 1; cur = pos; continue;
    case 76: // [トリ]
      if(str[cur] === 12487 && str[cur+1] === 12503 && str[cur+2] === 12473) return true; // [トリデプス]
      if(str[cur] === 12488 && str[cur+1] === 12489 && str[cur+2] === 12531) return true; // [トリトドン]
      pos += 1; cur = pos; continue;
    case 77: // [ド]
      if(str[cur] === 12460 && str[cur+1] === 12540 && str[cur+2] === 12473) return true; // [ドガース]
      if(str[cur] === 12463) { // [ドク]
        state = 78;
        cur += 1;
        continue;
      }
      if(str[cur] === 12468 && str[cur+1] === 12540 && str[cur+2] === 12512) return true; // [ドゴーム]
      if(str[cur] === 12469 && str[cur+1] === 12452 && str[cur+2] === 12489 && str[cur+3] === 12531) return true; // [ドサイドン]
      if(str[cur] === 12472 && str[cur+1] === 12519 && str[cur+2] === 12483 && str[cur+3] === 12481) return true; // [ドジョッチ]
      if(str[cur] === 12479 && str[cur+1] === 12452 && str[cur+2] === 12488 && str[cur+3] === 12473) return true; // [ドタイトス]
      if(str[cur] === 12521 && str[cur+1] === 12500 && str[cur+2] === 12458 && str[cur+3] === 12531) return true; // [ドラピオン]
      if(str[cur] === 12531) { // [ドン]
        state = 79;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540) { // [ドー]
        state = 80;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 78: // [ドク]
      if(str[cur] === 12463 && str[cur+1] === 12521 && str[cur+2] === 12466) return true; // [ドククラゲ]
      if(str[cur] === 12465 && str[cur+1] === 12452 && str[cur+2] === 12523) return true; // [ドクケイル]
      if(str[cur] === 12525 && str[cur+1] === 12483 && str[cur+2] === 12464) return true; // [ドクロッグ]
      pos += 1; cur = pos; continue;
    case 79: // [ドン]
      if(str[cur] === 12459 && str[cur+1] === 12521 && str[cur+2] === 12473) return true; // [ドンカラス]
      if(str[cur] === 12501 && str[cur+1] === 12449 && str[cur+2] === 12531) return true; // [ドンファン]
      if(str[cur] === 12513 && str[cur+1] === 12523) return true; // [ドンメル]
      pos += 2; cur = pos; continue;
    case 80: // [ドー]
      if(str[cur] === 12479 && str[cur+1] === 12463 && str[cur+2] === 12531) return true; // [ドータクン]
      if(str[cur] === 12489) { // [ドード]
        state = 81;
        cur += 1;
        continue;
      }
      if(str[cur] === 12502 && str[cur+1] === 12523) return true; // [ドーブル]
      if(str[cur] === 12511 && str[cur+1] === 12521 && str[cur+2] === 12540) return true; // [ドーミラー]
      pos += 2; cur = pos; continue;
    case 81: // [ドード]
      if(str[cur] === 12522 && str[cur+1] === 12458) return true; // [ドードリオ]
      if(str[cur] === 12540) return true; // [ドードー]
      pos += 2; cur = pos; continue;
    case 82: // [ナ]
      if(str[cur] === 12456 && str[cur+1] === 12488 && str[cur+2] === 12523) return true; // [ナエトル]
      if(str[cur] === 12478 && str[cur+1] === 12494 && str[cur+2] === 12463 && str[cur+3] === 12469) return true; // [ナゾノクサ]
      if(str[cur] === 12483) { // [ナッ]
        state = 83;
        cur += 1;
        continue;
      }
      if(str[cur] === 12510) { // [ナマ]
        state = 84;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 83: // [ナッ]
      if(str[cur] === 12463 && str[cur+1] === 12521 && str[cur+2] === 12540) return true; // [ナックラー]
      if(str[cur] === 12471 && str[cur+1] === 12540) return true; // [ナッシー]
      pos += 2; cur = pos; continue;
    case 84: // [ナマ]
      if(str[cur] === 12465 && str[cur+1] === 12525) return true; // [ナマケロ]
      if(str[cur] === 12474 && str[cur+1] === 12531) return true; // [ナマズン]
      pos += 1; cur = pos; continue;
    case 85: // [ニ]
      if(str[cur] === 12489) { // [ニド]
        state = 86;
        cur += 1;
        continue;
      }
      if(str[cur] === 12515) { // [ニャ]
        state = 89;
        cur += 1;
        continue;
      }
      if(str[cur] === 12517 && str[cur+1] === 12540 && str[cur+2] === 12521) return true; // [ニューラ]
      if(str[cur] === 12519 && str[cur+1] === 12525) { // [ニョロ]
        state = 90;
        cur += 2;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 86: // [ニド]
      if(str[cur] === 12461 && str[cur+1] === 12531 && str[cur+2] === 12464) return true; // [ニドキング]
      if(str[cur] === 12463 && str[cur+1] === 12452 && str[cur+2] === 12531) return true; // [ニドクイン]
      if(str[cur] === 12521 && str[cur+1] === 12531) { // [ニドラン]
        state = 87;
        cur += 2;
        continue;
      }
      if(str[cur] === 12522 && str[cur+1] === 12540) { // [ニドリー]
        state = 88;
        cur += 2;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 87: // [ニドラン]
      if(str[cur] === 9792) return true; // [ニドラン♀]
      if(str[cur] === 9794) return true; // [ニドラン♂]
      pos += 4; cur = pos; continue;
    case 88: // [ニドリー]
      if(str[cur] === 12490) return true; // [ニドリーナ]
      if(str[cur] === 12494) return true; // [ニドリーノ]
      pos += 4; cur = pos; continue;
    case 89: // [ニャ]
      if(str[cur] === 12523 && str[cur+1] === 12510 && str[cur+2] === 12540) return true; // [ニャルマー]
      if(str[cur] === 12540 && str[cur+1] === 12473) return true; // [ニャース]
      pos += 2; cur = pos; continue;
    case 90: // [ニョロ]
      if(str[cur] === 12478) return true; // [ニョロゾ]
      if(str[cur] === 12488 && str[cur+1] === 12494) return true; // [ニョロトノ]
      if(str[cur] === 12508 && str[cur+1] === 12531) return true; // [ニョロボン]
      if(str[cur] === 12514) return true; // [ニョロモ]
      pos += 2; cur = pos; continue;
    case 91: // [ヌ]
      if(str[cur] === 12458 && str[cur+1] === 12540) return true; // [ヌオー]
      if(str[cur] === 12465 && str[cur+1] === 12491 && str[cur+2] === 12531) return true; // [ヌケニン]
      if(str[cur] === 12510 && str[cur+1] === 12463 && str[cur+2] === 12525 && str[cur+3] === 12540) return true; // [ヌマクロー]
      pos += 1; cur = pos; continue;
    case 92: // [ネ]
      if(str[cur] === 12452 && str[cur+1] === 12486 && str[cur+2] === 12451) { // [ネイティ]
        state = 93;
        cur += 3;
        continue;
      }
      if(str[cur] === 12458 && str[cur+1] === 12521 && str[cur+2] === 12531 && str[cur+3] === 12488) return true; // [ネオラント]
      if(str[cur] === 12531 && str[cur+1] === 12489 && str[cur+2] === 12540 && str[cur+3] === 12523) return true; // [ネンドール]
      pos += 1; cur = pos; continue;
    case 93: // [ネイティ]
      return true; // [ネイティ]
      if(str[cur] === 12458) return true; // [ネイティオ]
      pos += 4; cur = pos; continue;
    case 94: // [ノ]
      if(str[cur] === 12463 && str[cur+1] === 12479 && str[cur+2] === 12473) return true; // [ノクタス]
      if(str[cur] === 12467 && str[cur+1] === 12483 && str[cur+2] === 12481) return true; // [ノコッチ]
      if(str[cur] === 12474 && str[cur+1] === 12497 && str[cur+2] === 12473) return true; // [ノズパス]
      pos += 1; cur = pos; continue;
    case 95: // [ハ]
      if(str[cur] === 12460 && str[cur+1] === 12493 && str[cur+2] === 12540 && str[cur+3] === 12523) return true; // [ハガネール]
      if(str[cur] === 12463 && str[cur+1] === 12522 && str[cur+2] === 12517 && str[cur+3] === 12540) return true; // [ハクリュー]
      if(str[cur] === 12473) { // [ハス]
        state = 96;
        cur += 1;
        continue;
      }
      if(str[cur] === 12483 && str[cur+1] === 12469 && str[cur+2] === 12512) return true; // [ハッサム]
      if(str[cur] === 12493 && str[cur+1] === 12483 && str[cur+2] === 12467) return true; // [ハネッコ]
      if(str[cur] === 12500 && str[cur+1] === 12490 && str[cur+2] === 12473) return true; // [ハピナス]
      if(str[cur] === 12502 && str[cur+1] === 12493 && str[cur+2] === 12540 && str[cur+3] === 12463) return true; // [ハブネーク]
      if(str[cur] === 12516 && str[cur+1] === 12471 && str[cur+2] === 12460 && str[cur+3] === 12513) return true; // [ハヤシガメ]
      if(str[cur] === 12522) { // [ハリ]
        state = 97;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12486 && str[cur+2] === 12540 && str[cur+3] === 12523) return true; // [ハンテール]
      pos += 1; cur = pos; continue;
    case 96: // [ハス]
      if(str[cur] === 12502 && str[cur+1] === 12524 && str[cur+2] === 12525) return true; // [ハスブレロ]
      if(str[cur] === 12508 && str[cur+1] === 12540) return true; // [ハスボー]
      pos += 1; cur = pos; continue;
    case 97: // [ハリ]
      if(str[cur] === 12486 && str[cur+1] === 12516 && str[cur+2] === 12510) return true; // [ハリテヤマ]
      if(str[cur] === 12540 && str[cur+1] === 12475 && str[cur+2] === 12531) return true; // [ハリーセン]
      pos += 1; cur = pos; continue;
    case 98: // [バ]
      if(str[cur] === 12463) { // [バク]
        state = 99;
        cur += 1;
        continue;
      }
      if(str[cur] === 12471 && str[cur+1] === 12515 && str[cur+2] === 12540 && str[cur+3] === 12514) return true; // [バシャーモ]
      if(str[cur] === 12479 && str[cur+1] === 12501 && str[cur+2] === 12522 && str[cur+3] === 12540) return true; // [バタフリー]
      if(str[cur] === 12493 && str[cur+1] === 12502 && str[cur+2] === 12540) return true; // [バネブー]
      if(str[cur] === 12522 && str[cur+1] === 12516 && str[cur+2] === 12540 && str[cur+3] === 12489) return true; // [バリヤード]
      if(str[cur] === 12523) { // [バル]
        state = 100;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12462 && str[cur+2] === 12521 && str[cur+3] === 12473) return true; // [バンギラス]
      pos += 1; cur = pos; continue;
    case 99: // [バク]
      if(str[cur] === 12458 && str[cur+1] === 12531 && str[cur+2] === 12464) return true; // [バクオング]
      if(str[cur] === 12501 && str[cur+1] === 12540 && str[cur+2] === 12531) return true; // [バクフーン]
      if(str[cur] === 12540 && str[cur+1] === 12480) return true; // [バクーダ]
      pos += 1; cur = pos; continue;
    case 100: // [バル]
      if(str[cur] === 12461 && str[cur+1] === 12540) return true; // [バルキー]
      if(str[cur] === 12499 && str[cur+1] === 12540 && str[cur+2] === 12488) return true; // [バルビート]
      pos += 1; cur = pos; continue;
    case 101: // [パ]
      if(str[cur] === 12454 && str[cur+1] === 12527 && str[cur+2] === 12454) return true; // [パウワウ]
      if(str[cur] === 12481 && str[cur+1] === 12522 && str[cur+2] === 12473) return true; // [パチリス]
      if(str[cur] === 12483 && str[cur+1] === 12481 && str[cur+2] === 12540 && str[cur+3] === 12523) return true; // [パッチール]
      if(str[cur] === 12521) { // [パラ]
        state = 102;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523) { // [パル]
        state = 103;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540 && str[cur+1] === 12523 && str[cur+2] === 12523) return true; // [パールル]
      pos += 1; cur = pos; continue;
    case 102: // [パラ]
      if(str[cur] === 12473) return true; // [パラス]
      if(str[cur] === 12475 && str[cur+1] === 12463 && str[cur+2] === 12488) return true; // [パラセクト]
      pos += 1; cur = pos; continue;
    case 103: // [パル]
      if(str[cur] === 12461 && str[cur+1] === 12450) return true; // [パルキア]
      if(str[cur] === 12471 && str[cur+1] === 12455 && str[cur+2] === 12531) return true; // [パルシェン]
      pos += 1; cur = pos; continue;
    case 104: // [ヒ]
      if(str[cur] === 12467 && str[cur+1] === 12470 && str[cur+2] === 12523) return true; // [ヒコザル]
      if(str[cur] === 12488) { // [ヒト]
        state = 105;
        cur += 1;
        continue;
      }
      if(str[cur] === 12494 && str[cur+1] === 12450 && str[cur+2] === 12521 && str[cur+3] === 12471) return true; // [ヒノアラシ]
      if(str[cur] === 12509 && str[cur+1] === 12509 && str[cur+2] === 12479 && str[cur+3] === 12473) return true; // [ヒポポタス]
      if(str[cur] === 12510 && str[cur+1] === 12490 && str[cur+2] === 12483 && str[cur+3] === 12484) return true; // [ヒマナッツ]
      if(str[cur] === 12513 && str[cur+1] === 12464 && str[cur+2] === 12510) return true; // [ヒメグマ]
      if(str[cur] === 12531 && str[cur+1] === 12496 && str[cur+2] === 12473) return true; // [ヒンバス]
      if(str[cur] === 12540 && str[cur+1] === 12489 && str[cur+2] === 12521 && str[cur+3] === 12531) return true; // [ヒードラン]
      pos += 1; cur = pos; continue;
    case 105: // [ヒト]
      if(str[cur] === 12459 && str[cur+1] === 12466) return true; // [ヒトカゲ]
      if(str[cur] === 12487 && str[cur+1] === 12510 && str[cur+2] === 12531) return true; // [ヒトデマン]
      pos += 1; cur = pos; continue;
    case 106: // [ビ]
      if(str[cur] === 12483 && str[cur+1] === 12497) return true; // [ビッパ]
      if(str[cur] === 12502 && str[cur+1] === 12521 && str[cur+2] === 12540 && str[cur+3] === 12496) return true; // [ビブラーバ]
      if(str[cur] === 12522 && str[cur+1] === 12522 && str[cur+2] === 12480 && str[cur+3] === 12510) return true; // [ビリリダマ]
      if(str[cur] === 12540) { // [ビー]
        state = 107;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 107: // [ビー]
      if(str[cur] === 12463 && str[cur+1] === 12452 && str[cur+2] === 12531) return true; // [ビークイン]
      if(str[cur] === 12480 && str[cur+1] === 12523) return true; // [ビーダル]
      if(str[cur] === 12489 && str[cur+1] === 12523) return true; // [ビードル]
      pos += 2; cur = pos; continue;
    case 108: // [ピ]
      if(str[cur] === 12451) return true; // [ピィ]
      if(str[cur] === 12459 && str[cur+1] === 12481 && str[cur+2] === 12517 && str[cur+3] === 12454) return true; // [ピカチュウ]
      if(str[cur] === 12463 && str[cur+1] === 12471 && str[cur+2] === 12540) return true; // [ピクシー]
      if(str[cur] === 12472 && str[cur+1] === 12519) { // [ピジョ]
        state = 109;
        cur += 2;
        continue;
      }
      if(str[cur] === 12481 && str[cur+1] === 12517 && str[cur+2] === 12540) return true; // [ピチュー]
      if(str[cur] === 12483 && str[cur+1] === 12500) return true; // [ピッピ]
      if(str[cur] === 12531 && str[cur+1] === 12503 && str[cur+2] === 12463) return true; // [ピンプク]
      pos += 1; cur = pos; continue;
    case 109: // [ピジョ]
      if(str[cur] === 12483 && str[cur+1] === 12488) return true; // [ピジョット]
      if(str[cur] === 12531) return true; // [ピジョン]
      pos += 3; cur = pos; continue;
    case 110: // [フ]
      if(str[cur] === 12449 && str[cur+1] === 12452 && str[cur+2] === 12516 && str[cur+3] === 12540) return true; // [ファイヤー]
      if(str[cur] === 12451 && str[cur+1] === 12458 && str[cur+2] === 12493) return true; // [フィオネ]
      if(str[cur] === 12457 && str[cur+1] === 12524 && str[cur+2] === 12488 && str[cur+3] === 12473) return true; // [フォレトス]
      if(str[cur] === 12459 && str[cur+1] === 12510 && str[cur+2] === 12523) return true; // [フカマル]
      if(str[cur] === 12471 && str[cur+1] === 12462) { // [フシギ]
        state = 111;
        cur += 2;
        continue;
      }
      if(str[cur] === 12521 && str[cur+1] === 12452 && str[cur+2] === 12468 && str[cur+3] === 12531) return true; // [フライゴン]
      if(str[cur] === 12522 && str[cur+1] === 12540 && str[cur+2] === 12470 && str[cur+3] === 12540) return true; // [フリーザー]
      if(str[cur] === 12525 && str[cur+1] === 12540 && str[cur+2] === 12476 && str[cur+3] === 12523) return true; // [フローゼル]
      if(str[cur] === 12527) { // [フワ]
        state = 112;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540 && str[cur+1] === 12487 && str[cur+2] === 12451 && str[cur+3] === 12531) return true; // [フーディン]
      pos += 1; cur = pos; continue;
    case 111: // [フシギ]
      if(str[cur] === 12477 && str[cur+1] === 12454) return true; // [フシギソウ]
      if(str[cur] === 12480 && str[cur+1] === 12493) return true; // [フシギダネ]
      if(str[cur] === 12496 && str[cur+1] === 12490) return true; // [フシギバナ]
      pos += 2; cur = pos; continue;
    case 112: // [フワ]
      if(str[cur] === 12521 && str[cur+1] === 12452 && str[cur+2] === 12489) return true; // [フワライド]
      if(str[cur] === 12531 && str[cur+1] === 12486) return true; // [フワンテ]
      pos += 1; cur = pos; continue;
    case 113: // [ブ]
      if(str[cur] === 12452 && str[cur+1] === 12476 && str[cur+2] === 12523) return true; // [ブイゼル]
      if(str[cur] === 12491 && str[cur+1] === 12515 && str[cur+2] === 12483 && str[cur+3] === 12488) return true; // [ブニャット]
      if(str[cur] === 12499 && str[cur+1] === 12451) return true; // [ブビィ]
      if(str[cur] === 12521 && str[cur+1] === 12483 && str[cur+2] === 12461 && str[cur+3] === 12540) return true; // [ブラッキー]
      if(str[cur] === 12523 && str[cur+1] === 12540) return true; // [ブルー]
      if(str[cur] === 12540) { // [ブー]
        state = 114;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 114: // [ブー]
      if(str[cur] === 12473 && str[cur+1] === 12479 && str[cur+2] === 12540) return true; // [ブースター]
      if(str[cur] === 12496 && str[cur+1] === 12540) { // [ブーバー]
        state = 115;
        cur += 2;
        continue;
      }
      if(str[cur] === 12500 && str[cur+1] === 12483 && str[cur+2] === 12464) return true; // [ブーピッグ]
      pos += 2; cur = pos; continue;
    case 115: // [ブーバー]
      return true; // [ブーバー]
      if(str[cur] === 12531) return true; // [ブーバーン]
      pos += 4; cur = pos; continue;
    case 116: // [プ]
      if(str[cur] === 12463 && str[cur+1] === 12522 && str[cur+2] === 12531) return true; // [プクリン]
      if(str[cur] === 12486 && str[cur+1] === 12521) return true; // [プテラ]
      if(str[cur] === 12503 && str[cur+1] === 12522 && str[cur+2] === 12531) return true; // [ププリン]
      if(str[cur] === 12521 && str[cur+1] === 12473 && str[cur+2] === 12523) return true; // [プラスル]
      if(str[cur] === 12522 && str[cur+1] === 12531) return true; // [プリン]
      pos += 1; cur = pos; continue;
    case 117: // [ヘ]
      if(str[cur] === 12452 && str[cur+1] === 12460 && str[cur+2] === 12491) return true; // [ヘイガニ]
      if(str[cur] === 12521 && str[cur+1] === 12463 && str[cur+2] === 12525 && str[cur+3] === 12473) return true; // [ヘラクロス]
      if(str[cur] === 12523 && str[cur+1] === 12460 && str[cur+2] === 12540) return true; // [ヘルガー]
      pos += 1; cur = pos; continue;
    case 118: // [ベ]
      if(str[cur] === 12452 && str[cur+1] === 12522 && str[cur+2] === 12540 && str[cur+3] === 12501) return true; // [ベイリーフ]
      if(str[cur] === 12488 && str[cur+1] === 12505) { // [ベトベ]
        state = 119;
        cur += 2;
        continue;
      }
      if(str[cur] === 12525) { // [ベロ]
        state = 120;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 119: // [ベトベ]
      if(str[cur] === 12479 && str[cur+1] === 12540) return true; // [ベトベター]
      if(str[cur] === 12488 && str[cur+1] === 12531) return true; // [ベトベトン]
      pos += 2; cur = pos; continue;
    case 120: // [ベロ]
      if(str[cur] === 12505 && str[cur+1] === 12523 && str[cur+2] === 12488) return true; // [ベロベルト]
      if(str[cur] === 12522 && str[cur+1] === 12531 && str[cur+2] === 12460) return true; // [ベロリンガ]
      pos += 1; cur = pos; continue;
    case 121: // [ペ]
      if(str[cur] === 12521 && str[cur+1] === 12483 && str[cur+2] === 12503) return true; // [ペラップ]
      if(str[cur] === 12522 && str[cur+1] === 12483 && str[cur+2] === 12497 && str[cur+3] === 12540) return true; // [ペリッパー]
      if(str[cur] === 12523 && str[cur+1] === 12471 && str[cur+2] === 12450 && str[cur+3] === 12531) return true; // [ペルシアン]
      pos += 1; cur = pos; continue;
    case 122: // [ホ]
      if(str[cur] === 12454 && str[cur+1] === 12458 && str[cur+2] === 12454) return true; // [ホウオウ]
      if(str[cur] === 12456 && str[cur+1] === 12523) { // [ホエル]
        state = 123;
        cur += 2;
        continue;
      }
      if(str[cur] === 12540 && str[cur+1] === 12507 && str[cur+2] === 12540) return true; // [ホーホー]
      pos += 1; cur = pos; continue;
    case 123: // [ホエル]
      if(str[cur] === 12458 && str[cur+1] === 12540) return true; // [ホエルオー]
      if(str[cur] === 12467) return true; // [ホエルコ]
      pos += 2; cur = pos; continue;
    case 124: // [ボ]
      if(str[cur] === 12473 && str[cur+1] === 12468 && str[cur+2] === 12489 && str[cur+3] === 12521) return true; // [ボスゴドラ]
      if(str[cur] === 12540 && str[cur+1] === 12510 && str[cur+2] === 12531 && str[cur+3] === 12480) return true; // [ボーマンダ]
      pos += 1; cur = pos; continue;
    case 125: // [ポ]
      if(str[cur] === 12481 && str[cur+1] === 12456 && str[cur+2] === 12490) return true; // [ポチエナ]
      if(str[cur] === 12483) { // [ポッ]
        state = 126;
        cur += 1;
        continue;
      }
      if(str[cur] === 12491 && str[cur+1] === 12540 && str[cur+2] === 12479) return true; // [ポニータ]
      if(str[cur] === 12509 && str[cur+1] === 12483 && str[cur+2] === 12467) return true; // [ポポッコ]
      if(str[cur] === 12522 && str[cur+1] === 12468 && str[cur+2] === 12531) { // [ポリゴン]
        state = 127;
        cur += 3;
        continue;
      }
      if(str[cur] === 12527 && str[cur+1] === 12523 && str[cur+2] === 12531) return true; // [ポワルン]
      pos += 1; cur = pos; continue;
    case 126: // [ポッ]
      if(str[cur] === 12479 && str[cur+1] === 12452 && str[cur+2] === 12471) return true; // [ポッタイシ]
      if(str[cur] === 12481 && str[cur+1] === 12515 && str[cur+2] === 12510) return true; // [ポッチャマ]
      if(str[cur] === 12509) return true; // [ポッポ]
      pos += 2; cur = pos; continue;
    case 127: // [ポリゴン]
      return true; // [ポリゴン]
      if(str[cur] === 50) return true; // [ポリゴン2]
      if(str[cur] === 90) return true; // [ポリゴンZ]
      pos += 4; cur = pos; continue;
    case 128: // [マ]
      if(str[cur] === 12452 && str[cur+1] === 12490 && str[cur+2] === 12531) return true; // [マイナン]
      if(str[cur] === 12463 && str[cur+1] === 12494 && str[cur+2] === 12471 && str[cur+3] === 12479) return true; // [マクノシタ]
      if(str[cur] === 12464) { // [マグ]
        state = 129;
        cur += 1;
        continue;
      }
      if(str[cur] === 12473 && str[cur+1] === 12461 && str[cur+2] === 12483 && str[cur+3] === 12497) return true; // [マスキッパ]
      if(str[cur] === 12479 && str[cur+1] === 12489 && str[cur+2] === 12460 && str[cur+3] === 12473) return true; // [マタドガス]
      if(str[cur] === 12480 && str[cur+1] === 12484 && str[cur+2] === 12508 && str[cur+3] === 12511) return true; // [マダツボミ]
      if(str[cur] === 12483 && str[cur+1] === 12473 && str[cur+2] === 12464 && str[cur+3] === 12510) return true; // [マッスグマ]
      if(str[cur] === 12490 && str[cur+1] === 12501 && str[cur+2] === 12451) return true; // [マナフィ]
      if(str[cur] === 12491 && str[cur+1] === 12517 && str[cur+2] === 12540 && str[cur+3] === 12521) return true; // [マニューラ]
      if(str[cur] === 12493 && str[cur+1] === 12493) return true; // [マネネ]
      if(str[cur] === 12518 && str[cur+1] === 12523 && str[cur+2] === 12489) return true; // [マユルド]
      if(str[cur] === 12522 && str[cur+1] === 12523) { // [マリル]
        state = 131;
        cur += 2;
        continue;
      }
      if(str[cur] === 12523) { // [マル]
        state = 132;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531) { // [マン]
        state = 133;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 129: // [マグ]
      if(str[cur] === 12459 && str[cur+1] === 12523 && str[cur+2] === 12468) return true; // [マグカルゴ]
      if(str[cur] === 12510) { // [マグマ]
        state = 130;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 130: // [マグマ]
      if(str[cur] === 12483 && str[cur+1] === 12464) return true; // [マグマッグ]
      if(str[cur] === 12521 && str[cur+1] === 12471) return true; // [マグマラシ]
      pos += 2; cur = pos; continue;
    case 131: // [マリル]
      return true; // [マリル]
      if(str[cur] === 12522) return true; // [マリルリ]
      pos += 2; cur = pos; continue;
    case 132: // [マル]
      if(str[cur] === 12494 && str[cur+1] === 12540 && str[cur+2] === 12512) return true; // [マルノーム]
      if(str[cur] === 12510 && str[cur+1] === 12452 && str[cur+2] === 12531) return true; // [マルマイン]
      pos += 1; cur = pos; continue;
    case 133: // [マン]
      if(str[cur] === 12461 && str[cur+1] === 12540) return true; // [マンキー]
      if(str[cur] === 12479 && str[cur+1] === 12452 && str[cur+2] === 12531) return true; // [マンタイン]
      if(str[cur] === 12512 && str[cur+1] === 12540) return true; // [マンムー]
      pos += 2; cur = pos; continue;
    case 134: // [ミ]
      if(str[cur] === 12459 && str[cur+1] === 12523 && str[cur+2] === 12466) return true; // [ミカルゲ]
      if(str[cur] === 12474 && str[cur+1] === 12468 && str[cur+2] === 12525 && str[cur+3] === 12454) return true; // [ミズゴロウ]
      if(str[cur] === 12484 && str[cur+1] === 12495 && str[cur+2] === 12491 && str[cur+3] === 12540) return true; // [ミツハニー]
      if(str[cur] === 12491 && str[cur+1] === 12522 && str[cur+2] === 12517 && str[cur+3] === 12454) return true; // [ミニリュウ]
      if(str[cur] === 12494) { // [ミノ]
        state = 135;
        cur += 1;
        continue;
      }
      if(str[cur] === 12511 && str[cur+1] === 12525) { // [ミミロ]
        state = 136;
        cur += 2;
        continue;
      }
      if(str[cur] === 12517 && str[cur+1] === 12454) { // [ミュウ]
        state = 137;
        cur += 2;
        continue;
      }
      if(str[cur] === 12523 && str[cur+1] === 12479 && str[cur+2] === 12531 && str[cur+3] === 12463) return true; // [ミルタンク]
      if(str[cur] === 12525 && str[cur+1] === 12459 && str[cur+2] === 12525 && str[cur+3] === 12473) return true; // [ミロカロス]
      pos += 1; cur = pos; continue;
    case 135: // [ミノ]
      if(str[cur] === 12510 && str[cur+1] === 12480 && str[cur+2] === 12512) return true; // [ミノマダム]
      if(str[cur] === 12512 && str[cur+1] === 12483 && str[cur+2] === 12481) return true; // [ミノムッチ]
      pos += 1; cur = pos; continue;
    case 136: // [ミミロ]
      if(str[cur] === 12483 && str[cur+1] === 12503) return true; // [ミミロップ]
      if(str[cur] === 12523) return true; // [ミミロル]
      pos += 2; cur = pos; continue;
    case 137: // [ミュウ]
      return true; // [ミュウ]
      if(str[cur] === 12484 && str[cur+1] === 12540) return true; // [ミュウツー]
      pos += 2; cur = pos; continue;
    case 138: // [ム]
      if(str[cur] === 12454 && str[cur+1] === 12510) { // [ムウマ]
        state = 139;
        cur += 2;
        continue;
      }
      if(str[cur] === 12463) { // [ムク]
        state = 140;
        cur += 1;
        continue;
      }
      if(str[cur] === 12481 && str[cur+1] === 12517 && str[cur+2] === 12540 && str[cur+3] === 12523) return true; // [ムチュール]
      if(str[cur] === 12483 && str[cur+1] === 12463 && str[cur+2] === 12523) return true; // [ムックル]
      pos += 1; cur = pos; continue;
    case 139: // [ムウマ]
      return true; // [ムウマ]
      if(str[cur] === 12540 && str[cur+1] === 12472) return true; // [ムウマージ]
      pos += 2; cur = pos; continue;
    case 140: // [ムク]
      if(str[cur] === 12496 && str[cur+1] === 12540 && str[cur+2] === 12489) return true; // [ムクバード]
      if(str[cur] === 12507 && str[cur+1] === 12540 && str[cur+2] === 12463) return true; // [ムクホーク]
      pos += 1; cur = pos; continue;
    case 141: // [メ]
      if(str[cur] === 12460) { // [メガ]
        state = 142;
        cur += 1;
        continue;
      }
      if(str[cur] === 12479) { // [メタ]
        state = 143;
        cur += 1;
        continue;
      }
      if(str[cur] === 12494 && str[cur+1] === 12463 && str[cur+2] === 12521 && str[cur+3] === 12466) return true; // [メノクラゲ]
      if(str[cur] === 12522 && str[cur+1] === 12540 && str[cur+2] === 12503) return true; // [メリープ]
      pos += 1; cur = pos; continue;
    case 142: // [メガ]
      if(str[cur] === 12491 && str[cur+1] === 12454 && str[cur+2] === 12512) return true; // [メガニウム]
      if(str[cur] === 12516 && str[cur+1] === 12531 && str[cur+2] === 12510) return true; // [メガヤンマ]
      pos += 1; cur = pos; continue;
    case 143: // [メタ]
      if(str[cur] === 12464 && str[cur+1] === 12525 && str[cur+2] === 12473) return true; // [メタグロス]
      if(str[cur] === 12514 && str[cur+1] === 12531) return true; // [メタモン]
      if(str[cur] === 12531 && str[cur+1] === 12464) return true; // [メタング]
      pos += 1; cur = pos; continue;
    case 144: // [モ]
      if(str[cur] === 12454 && str[cur+1] === 12459 && str[cur+2] === 12470 && str[cur+3] === 12523) return true; // [モウカザル]
      if(str[cur] === 12467 && str[cur+1] === 12467) return true; // [モココ]
      if(str[cur] === 12472 && str[cur+1] === 12515 && str[cur+2] === 12531 && str[cur+3] === 12508) return true; // [モジャンボ]
      if(str[cur] === 12523 && str[cur+1] === 12501 && str[cur+2] === 12457 && str[cur+3] === 12531) return true; // [モルフォン]
      if(str[cur] === 12531 && str[cur+1] === 12472 && str[cur+2] === 12515 && str[cur+3] === 12521) return true; // [モンジャラ]
      pos += 1; cur = pos; continue;
    case 145: // [ヤ]
      if(str[cur] === 12472 && str[cur+1] === 12525 && str[cur+2] === 12531) return true; // [ヤジロン]
      if(str[cur] === 12489) { // [ヤド]
        state = 146;
        cur += 1;
        continue;
      }
      if(str[cur] === 12511) { // [ヤミ]
        state = 147;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523 && str[cur+1] === 12461 && str[cur+2] === 12514 && str[cur+3] === 12494) return true; // [ヤルキモノ]
      if(str[cur] === 12531 && str[cur+1] === 12516 && str[cur+2] === 12531 && str[cur+3] === 12510) return true; // [ヤンヤンマ]
      pos += 1; cur = pos; continue;
    case 146: // [ヤド]
      if(str[cur] === 12461 && str[cur+1] === 12531 && str[cur+2] === 12464) return true; // [ヤドキング]
      if(str[cur] === 12521 && str[cur+1] === 12531) return true; // [ヤドラン]
      if(str[cur] === 12531) return true; // [ヤドン]
      pos += 1; cur = pos; continue;
    case 147: // [ヤミ]
      if(str[cur] === 12459 && str[cur+1] === 12521 && str[cur+2] === 12473) return true; // [ヤミカラス]
      if(str[cur] === 12521 && str[cur+1] === 12511) return true; // [ヤミラミ]
      pos += 1; cur = pos; continue;
    case 148: // [ユ]
      if(str[cur] === 12461) { // [ユキ]
        state = 149;
        cur += 1;
        continue;
      }
      if(str[cur] === 12463 && str[cur+1] === 12471 && str[cur+2] === 12540) return true; // [ユクシー]
      if(str[cur] === 12524 && str[cur+1] === 12452 && str[cur+2] === 12489 && str[cur+3] === 12523) return true; // [ユレイドル]
      if(str[cur] === 12531 && str[cur+1] === 12466 && str[cur+2] === 12521 && str[cur+3] === 12540) return true; // [ユンゲラー]
      pos += 1; cur = pos; continue;
    case 149: // [ユキ]
      if(str[cur] === 12459 && str[cur+1] === 12502 && str[cur+2] === 12522) return true; // [ユキカブリ]
      if(str[cur] === 12494 && str[cur+1] === 12458 && str[cur+2] === 12540) return true; // [ユキノオー]
      if(str[cur] === 12513 && str[cur+1] === 12494 && str[cur+2] === 12467) return true; // [ユキメノコ]
      if(str[cur] === 12527 && str[cur+1] === 12521 && str[cur+2] === 12471) return true; // [ユキワラシ]
      pos += 1; cur = pos; continue;
    case 150: // [ヨ]
      if(str[cur] === 12494 && str[cur+1] === 12527 && str[cur+2] === 12540 && str[cur+3] === 12523) return true; // [ヨノワール]
      if(str[cur] === 12510 && str[cur+1] === 12527 && str[cur+2] === 12523) return true; // [ヨマワル]
      if(str[cur] === 12523 && str[cur+1] === 12494 && str[cur+2] === 12474 && str[cur+3] === 12463) return true; // [ヨルノズク]
      if(str[cur] === 12540 && str[cur+1] === 12462 && str[cur+2] === 12521 && str[cur+3] === 12473) return true; // [ヨーギラス]
      pos += 1; cur = pos; continue;
    case 151: // [ラ]
      if(str[cur] === 12452) { // [ライ]
        state = 152;
        cur += 1;
        continue;
      }
      if(str[cur] === 12463 && str[cur+1] === 12521 && str[cur+2] === 12452) return true; // [ラクライ]
      if(str[cur] === 12464 && str[cur+1] === 12521 && str[cur+2] === 12540 && str[cur+3] === 12472) return true; // [ラグラージ]
      if(str[cur] === 12483) { // [ラッ]
        state = 153;
        cur += 1;
        continue;
      }
      if(str[cur] === 12486 && str[cur+1] === 12451) { // [ラティ]
        state = 154;
        cur += 2;
        continue;
      }
      if(str[cur] === 12501 && str[cur+1] === 12524 && str[cur+2] === 12471 && str[cur+3] === 12450) return true; // [ラフレシア]
      if(str[cur] === 12502 && str[cur+1] === 12459 && str[cur+2] === 12473) return true; // [ラブカス]
      if(str[cur] === 12503 && str[cur+1] === 12521 && str[cur+2] === 12473) return true; // [ラプラス]
      if(str[cur] === 12512 && str[cur+1] === 12497 && str[cur+2] === 12523 && str[cur+3] === 12489) return true; // [ラムパルド]
      if(str[cur] === 12523 && str[cur+1] === 12488 && str[cur+2] === 12473) return true; // [ラルトス]
      if(str[cur] === 12531 && str[cur+1] === 12479 && str[cur+2] === 12540 && str[cur+3] === 12531) return true; // [ランターン]
      pos += 1; cur = pos; continue;
    case 152: // [ライ]
      if(str[cur] === 12467 && str[cur+1] === 12454) return true; // [ライコウ]
      if(str[cur] === 12481 && str[cur+1] === 12517 && str[cur+2] === 12454) return true; // [ライチュウ]
      if(str[cur] === 12508 && str[cur+1] === 12523 && str[cur+2] === 12488) return true; // [ライボルト]
      pos += 1; cur = pos; continue;
    case 153: // [ラッ]
      if(str[cur] === 12461 && str[cur+1] === 12540) return true; // [ラッキー]
      if(str[cur] === 12479) return true; // [ラッタ]
      pos += 2; cur = pos; continue;
    case 154: // [ラティ]
      if(str[cur] === 12450 && str[cur+1] === 12473) return true; // [ラティアス]
      if(str[cur] === 12458 && str[cur+1] === 12473) return true; // [ラティオス]
      pos += 3; cur = pos; continue;
    case 155: // [リ]
      if(str[cur] === 12458 && str[cur+1] === 12523) return true; // [リオル]
      if(str[cur] === 12470 && str[cur+1] === 12540 && str[cur+2] === 12489) { // [リザード]
        state = 156;
        cur += 3;
        continue;
      }
      if(str[cur] === 12522 && str[cur+1] === 12540 && str[cur+2] === 12521) return true; // [リリーラ]
      if(str[cur] === 12531 && str[cur+1] === 12464 && str[cur+2] === 12510) return true; // [リングマ]
      if(str[cur] === 12540) { // [リー]
        state = 157;
        cur += 1;
        continue;
      }
      pos += 1; cur = pos; continue;
    case 156: // [リザード]
      return true; // [リザード]
      if(str[cur] === 12531) return true; // [リザードン]
      pos += 3; cur = pos; continue;
    case 157: // [リー]
      if(str[cur] === 12471 && str[cur+1] === 12515 && str[cur+2] === 12531) return true; // [リーシャン]
      if(str[cur] === 12501 && str[cur+1] === 12451 && str[cur+2] === 12450) return true; // [リーフィア]
      pos += 2; cur = pos; continue;
    case 158: // [ル]
      if(str[cur] === 12459 && str[cur+1] === 12522 && str[cur+2] === 12458) return true; // [ルカリオ]
      if(str[cur] === 12462 && str[cur+1] === 12450) return true; // [ルギア]
      if(str[cur] === 12463 && str[cur+1] === 12471 && str[cur+2] === 12458) return true; // [ルクシオ]
      if(str[cur] === 12490 && str[cur+1] === 12488 && str[cur+2] === 12540 && str[cur+3] === 12531) return true; // [ルナトーン]
      if(str[cur] === 12522 && str[cur+1] === 12522) return true; // [ルリリ]
      if(str[cur] === 12531 && str[cur+1] === 12497 && str[cur+2] === 12483 && str[cur+3] === 12497) return true; // [ルンパッパ]
      if(str[cur] === 12540 && str[cur+1] === 12472 && str[cur+2] === 12517 && str[cur+3] === 12521) return true; // [ルージュラ]
      pos += 1; cur = pos; continue;
    case 159: // [レ]
      if(str[cur] === 12450 && str[cur+1] === 12467 && str[cur+2] === 12452 && str[cur+3] === 12523) return true; // [レアコイル]
      if(str[cur] === 12472) { // [レジ]
        state = 160;
        cur += 1;
        continue;
      }
      if(str[cur] === 12483 && str[cur+1] === 12463 && str[cur+2] === 12454 && str[cur+3] === 12470) return true; // [レックウザ]
      if(str[cur] === 12487 && str[cur+1] === 12451) { // [レディ]
        state = 161;
        cur += 2;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12488 && str[cur+2] === 12521 && str[cur+3] === 12540) return true; // [レントラー]
      pos += 1; cur = pos; continue;
    case 160: // [レジ]
      if(str[cur] === 12450 && str[cur+1] === 12452 && str[cur+2] === 12473) return true; // [レジアイス]
      if(str[cur] === 12462 && str[cur+1] === 12460 && str[cur+2] === 12473) return true; // [レジギガス]
      if(str[cur] === 12473 && str[cur+1] === 12481 && str[cur+2] === 12523) return true; // [レジスチル]
      if(str[cur] === 12525 && str[cur+1] === 12483 && str[cur+2] === 12463) return true; // [レジロック]
      pos += 1; cur = pos; continue;
    case 161: // [レディ]
      if(str[cur] === 12450 && str[cur+1] === 12531) return true; // [レディアン]
      if(str[cur] === 12496) return true; // [レディバ]
      pos += 3; cur = pos; continue;
    case 162: // [ロ]
      if(str[cur] === 12467 && str[cur+1] === 12531) return true; // [ロコン]
      if(str[cur] === 12474 && str[cur+1] === 12524 && str[cur+2] === 12452 && str[cur+3] === 12489) return true; // [ロズレイド]
      if(str[cur] === 12476 && str[cur+1] === 12522 && str[cur+2] === 12450) return true; // [ロゼリア]
      if(str[cur] === 12488 && str[cur+1] === 12512) return true; // [ロトム]
      pos += 1; cur = pos; continue;
    case 163: // [ワ]
      if(str[cur] === 12459 && str[cur+1] === 12471 && str[cur+2] === 12515 && str[cur+3] === 12514) return true; // [ワカシャモ]
      if(str[cur] === 12479 && str[cur+1] === 12483 && str[cur+2] === 12467) return true; // [ワタッコ]
      if(str[cur] === 12491 && str[cur+1] === 12494 && str[cur+2] === 12467) return true; // [ワニノコ]
      if(str[cur] === 12531 && str[cur+1] === 12522 && str[cur+2] === 12461 && str[cur+3] === 12540) return true; // [ワンリキー]
      pos += 1; cur = pos; continue;
    default: throw new Exception('Unknown state: '+state);
  }
  return false;
};
