module.exports=function(orig_str){
  const length = orig_str.length;
  let str = new Array(length);
  for(let i=0;i < length;i++) {
    str[i] = orig_str.charCodeAt(i);
  }
  let pos = 0;
  while(pos < length) {
    if(str[pos] === 12501) { // [フ]
      if(str[pos+1] === 12471 && str[pos+2] === 12462) { // [フシギ]
        if(str[pos+3] === 12477 && str[pos+4] === 12454) return true; // [フシギソウ]
        if(str[pos+3] === 12480 && str[pos+4] === 12493) return true; // [フシギダネ]
        if(str[pos+3] === 12496 && str[pos+4] === 12490) return true; // [フシギバナ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12487 && str[pos+3] === 12451 && str[pos+4] === 12531) return true; // [フーディン]
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12470 && str[pos+4] === 12540) return true; // [フリーザー]
      if(str[pos+1] === 12449 && str[pos+2] === 12452 && str[pos+3] === 12516 && str[pos+4] === 12540) return true; // [ファイヤー]
      if(str[pos+1] === 12457 && str[pos+2] === 12524 && str[pos+3] === 12488 && str[pos+4] === 12473) return true; // [フォレトス]
      if(str[pos+1] === 12521 && str[pos+2] === 12452 && str[pos+3] === 12468 && str[pos+4] === 12531) return true; // [フライゴン]
      if(str[pos+1] === 12525 && str[pos+2] === 12540 && str[pos+3] === 12476 && str[pos+4] === 12523) return true; // [フローゼル]
      if(str[pos+1] === 12527) { // [フワ]
        if(str[pos+2] === 12521 && str[pos+3] === 12452 && str[pos+4] === 12489) return true; // [フワライド]
        if(str[pos+2] === 12531 && str[pos+3] === 12486) return true; // [フワンテ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12459 && str[pos+2] === 12510 && str[pos+3] === 12523) return true; // [フカマル]
      if(str[pos+1] === 12451 && str[pos+2] === 12458 && str[pos+3] === 12493) return true; // [フィオネ]
      pos+=1; continue;
    }
    if(str[pos] === 12498) { // [ヒ]
      if(str[pos+1] === 12488) { // [ヒト]
        if(str[pos+2] === 12459 && str[pos+3] === 12466) return true; // [ヒトカゲ]
        if(str[pos+2] === 12487 && str[pos+3] === 12510 && str[pos+4] === 12531) return true; // [ヒトデマン]
        pos+=1; continue;
      }
      if(str[pos+1] === 12494 && str[pos+2] === 12450 && str[pos+3] === 12521 && str[pos+4] === 12471) return true; // [ヒノアラシ]
      if(str[pos+1] === 12510 && str[pos+2] === 12490 && str[pos+3] === 12483 && str[pos+4] === 12484) return true; // [ヒマナッツ]
      if(str[pos+1] === 12513 && str[pos+2] === 12464 && str[pos+3] === 12510) return true; // [ヒメグマ]
      if(str[pos+1] === 12531 && str[pos+2] === 12496 && str[pos+3] === 12473) return true; // [ヒンバス]
      if(str[pos+1] === 12467 && str[pos+2] === 12470 && str[pos+3] === 12523) return true; // [ヒコザル]
      if(str[pos+1] === 12509 && str[pos+2] === 12509 && str[pos+3] === 12479 && str[pos+4] === 12473) return true; // [ヒポポタス]
      if(str[pos+1] === 12540 && str[pos+2] === 12489 && str[pos+3] === 12521 && str[pos+4] === 12531) return true; // [ヒードラン]
      pos+=1; continue;
    }
    if(str[pos] === 12522) { // [リ]
      if(str[pos+1] === 12470 && str[pos+2] === 12540 && str[pos+3] === 12489) { // [リザード]
        return true; // [リザード]
        if(str[pos+4] === 12531) return true; // [リザードン]
        pos+=3; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12464 && str[pos+3] === 12510) return true; // [リングマ]
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12521) return true; // [リリーラ]
      if(str[pos+1] === 12540) { // [リー]
        if(str[pos+2] === 12471 && str[pos+3] === 12515 && str[pos+4] === 12531) return true; // [リーシャン]
        if(str[pos+2] === 12501 && str[pos+3] === 12451 && str[pos+4] === 12450) return true; // [リーフィア]
        pos+=2; continue;
      }
      if(str[pos+1] === 12458 && str[pos+2] === 12523) return true; // [リオル]
      pos+=1; continue;
    }
    if(str[pos] === 12476 && str[pos+1] === 12491 && str[pos+2] === 12460 && str[pos+3] === 12513) return true; // [ゼニガメ]
    if(str[pos] === 12459) { // [カ]
      if(str[pos+1] === 12452) { // [カイ]
        if(str[pos+2] === 12522) { // [カイリ]
          if(str[pos+3] === 12461 && str[pos+4] === 12540) return true; // [カイリキー]
          if(str[pos+3] === 12517 && str[pos+4] === 12540) return true; // [カイリュー]
          pos+=2; continue;
        }
        if(str[pos+2] === 12525 && str[pos+3] === 12473) return true; // [カイロス]
        if(str[pos+2] === 12458 && str[pos+3] === 12540 && str[pos+4] === 12460) return true; // [カイオーガ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12513) { // [カメ]
        if(str[pos+2] === 12483 && str[pos+3] === 12463 && str[pos+4] === 12473) return true; // [カメックス]
        if(str[pos+2] === 12540 && str[pos+3] === 12523) return true; // [カメール]
        pos+=1; continue;
      }
      if(str[pos+1] === 12514 && str[pos+2] === 12493 && str[pos+3] === 12462) return true; // [カモネギ]
      if(str[pos+1] === 12521) { // [カラ]
        if(str[pos+2] === 12459 && str[pos+3] === 12521) return true; // [カラカラ]
        if(str[pos+2] === 12469 && str[pos+3] === 12522 && str[pos+4] === 12473) return true; // [カラサリス]
        if(str[pos+2] === 12490 && str[pos+3] === 12463 && str[pos+4] === 12471) return true; // [カラナクシ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12502 && str[pos+2] === 12488) { // [カブト]
        return true; // [カブト]
        if(str[pos+3] === 12503 && str[pos+4] === 12473) return true; // [カブトプス]
        pos+=2; continue;
      }
      if(str[pos+1] === 12499 && str[pos+2] === 12468 && str[pos+3] === 12531) return true; // [カビゴン]
      if(str[pos+1] === 12509 && str[pos+2] === 12456 && str[pos+3] === 12521 && str[pos+4] === 12540) return true; // [カポエラー]
      if(str[pos+1] === 12463 && str[pos+2] === 12524 && str[pos+3] === 12458 && str[pos+4] === 12531) return true; // [カクレオン]
      if(str[pos+1] === 12466 && str[pos+2] === 12508 && str[pos+3] === 12454 && str[pos+4] === 12474) return true; // [カゲボウズ]
      if(str[pos+1] === 12496 && str[pos+2] === 12523 && str[pos+3] === 12489 && str[pos+4] === 12531) return true; // [カバルドン]
      pos+=1; continue;
    }
    if(str[pos] === 12461) { // [キ]
      if(str[pos+1] === 12515) { // [キャ]
        if(str[pos+2] === 12479 && str[pos+3] === 12500 && str[pos+4] === 12540) return true; // [キャタピー]
        if(str[pos+2] === 12514 && str[pos+3] === 12513) return true; // [キャモメ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12517 && str[pos+2] === 12454 && str[pos+3] === 12467 && str[pos+4] === 12531) return true; // [キュウコン]
      if(str[pos+1] === 12531 && str[pos+2] === 12464) { // [キング]
        if(str[pos+3] === 12489 && str[pos+4] === 12521) return true; // [キングドラ]
        if(str[pos+3] === 12521 && str[pos+4] === 12540) return true; // [キングラー]
        pos+=2; continue;
      }
      if(str[pos+1] === 12524 && str[pos+2] === 12452 && str[pos+3] === 12495 && str[pos+4] === 12490) return true; // [キレイハナ]
      if(str[pos+1] === 12510 && str[pos+2] === 12527 && str[pos+3] === 12522) return true; // [キマワリ]
      if(str[pos+1] === 12522 && str[pos+2] === 12531 && str[pos+3] === 12522 && str[pos+4] === 12461) return true; // [キリンリキ]
      if(str[pos+1] === 12514 && str[pos+2] === 12522) return true; // [キモリ]
      if(str[pos+1] === 12523 && str[pos+2] === 12522 && str[pos+3] === 12450) return true; // [キルリア]
      if(str[pos+1] === 12494) { // [キノ]
        if(str[pos+2] === 12460 && str[pos+3] === 12483 && str[pos+4] === 12469) return true; // [キノガッサ]
        if(str[pos+2] === 12467 && str[pos+3] === 12467) return true; // [キノココ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12496 && str[pos+2] === 12491 && str[pos+3] === 12450) return true; // [キバニア]
      pos+=1; continue;
    }
    if(str[pos] === 12488) { // [ト]
      if(str[pos+1] === 12469 && str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12488) return true; // [トサキント]
      if(str[pos+1] === 12521 && str[pos+2] === 12531 && str[pos+3] === 12475 && str[pos+4] === 12523) return true; // [トランセル]
      if(str[pos+1] === 12466) { // [トゲ]
        if(str[pos+2] === 12481 && str[pos+3] === 12483 && str[pos+4] === 12463) return true; // [トゲチック]
        if(str[pos+2] === 12500 && str[pos+3] === 12540) return true; // [トゲピー]
        if(str[pos+2] === 12461 && str[pos+3] === 12483 && str[pos+4] === 12473) return true; // [トゲキッス]
        pos+=1; continue;
      }
      if(str[pos+1] === 12525 && str[pos+2] === 12500 && str[pos+3] === 12454 && str[pos+4] === 12473) return true; // [トロピウス]
      if(str[pos+1] === 12489) { // [トド]
        if(str[pos+2] === 12464 && str[pos+3] === 12521 && str[pos+4] === 12540) return true; // [トドグラー]
        if(str[pos+2] === 12476 && str[pos+3] === 12523 && str[pos+4] === 12460) return true; // [トドゼルガ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12522) { // [トリ]
        if(str[pos+2] === 12487 && str[pos+3] === 12503 && str[pos+4] === 12473) return true; // [トリデプス]
        if(str[pos+2] === 12488 && str[pos+3] === 12489 && str[pos+4] === 12531) return true; // [トリトドン]
        pos+=1; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12496) { // [バ]
      if(str[pos+1] === 12479 && str[pos+2] === 12501 && str[pos+3] === 12522 && str[pos+4] === 12540) return true; // [バタフリー]
      if(str[pos+1] === 12522 && str[pos+2] === 12516 && str[pos+3] === 12540 && str[pos+4] === 12489) return true; // [バリヤード]
      if(str[pos+1] === 12463) { // [バク]
        if(str[pos+2] === 12458 && str[pos+3] === 12531 && str[pos+4] === 12464) return true; // [バクオング]
        if(str[pos+2] === 12501 && str[pos+3] === 12540 && str[pos+4] === 12531) return true; // [バクフーン]
        if(str[pos+2] === 12540 && str[pos+3] === 12480) return true; // [バクーダ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12523) { // [バル]
        if(str[pos+2] === 12461 && str[pos+3] === 12540) return true; // [バルキー]
        if(str[pos+2] === 12499 && str[pos+3] === 12540 && str[pos+4] === 12488) return true; // [バルビート]
        pos+=1; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12462 && str[pos+3] === 12521 && str[pos+4] === 12473) return true; // [バンギラス]
      if(str[pos+1] === 12471 && str[pos+2] === 12515 && str[pos+3] === 12540 && str[pos+4] === 12514) return true; // [バシャーモ]
      if(str[pos+1] === 12493 && str[pos+2] === 12502 && str[pos+3] === 12540) return true; // [バネブー]
      pos+=1; continue;
    }
    if(str[pos] === 12499) { // [ビ]
      if(str[pos+1] === 12522 && str[pos+2] === 12522 && str[pos+3] === 12480 && str[pos+4] === 12510) return true; // [ビリリダマ]
      if(str[pos+1] === 12540) { // [ビー]
        if(str[pos+2] === 12480 && str[pos+3] === 12523) return true; // [ビーダル]
        if(str[pos+2] === 12489 && str[pos+3] === 12523) return true; // [ビードル]
        if(str[pos+2] === 12463 && str[pos+3] === 12452 && str[pos+4] === 12531) return true; // [ビークイン]
        pos+=2; continue;
      }
      if(str[pos+1] === 12502 && str[pos+2] === 12521 && str[pos+3] === 12540 && str[pos+4] === 12496) return true; // [ビブラーバ]
      if(str[pos+1] === 12483 && str[pos+2] === 12497) return true; // [ビッパ]
      pos+=1; continue;
    }
    if(str[pos] === 12467) { // [コ]
      if(str[pos+1] === 12463 && str[pos+2] === 12540 && str[pos+3] === 12531) return true; // [コクーン]
      if(str[pos+1] === 12521 && str[pos+2] === 12483 && str[pos+3] === 12479) return true; // [コラッタ]
      if(str[pos+1] === 12531 && str[pos+2] === 12497 && str[pos+3] === 12531) return true; // [コンパン]
      if(str[pos+1] === 12480 && str[pos+2] === 12483 && str[pos+3] === 12463) return true; // [コダック]
      if(str[pos+1] === 12452) { // [コイ]
        if(str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true; // [コイキング]
        if(str[pos+2] === 12523) return true; // [コイル]
        pos+=1; continue;
      }
      if(str[pos+1] === 12494 && str[pos+2] === 12495 && str[pos+3] === 12490) return true; // [コノハナ]
      if(str[pos+1] === 12467 && str[pos+2] === 12489 && str[pos+3] === 12521) return true; // [ココドラ]
      if(str[pos+1] === 12489 && str[pos+2] === 12521) return true; // [コドラ]
      if(str[pos+1] === 12540 && str[pos+2] === 12479 && str[pos+3] === 12473) return true; // [コータス]
      if(str[pos+1] === 12514 && str[pos+2] === 12523 && str[pos+3] === 12540) return true; // [コモルー]
      if(str[pos+1] === 12525) { // [コロ]
        if(str[pos+2] === 12488 && str[pos+3] === 12483 && str[pos+4] === 12463) return true; // [コロトック]
        if(str[pos+2] === 12508 && str[pos+3] === 12540 && str[pos+4] === 12471) return true; // [コロボーシ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12531 && str[pos+3] === 12463) return true; // [コリンク]
      pos+=1; continue;
    }
    if(str[pos] === 12473) { // [ス]
      if(str[pos+1] === 12500 && str[pos+2] === 12450 && str[pos+3] === 12540) return true; // [スピアー]
      if(str[pos+1] === 12522 && str[pos+2] === 12540) { // [スリー]
        if(str[pos+3] === 12497 && str[pos+4] === 12540) return true; // [スリーパー]
        if(str[pos+3] === 12503) return true; // [スリープ]
        pos+=3; continue;
      }
      if(str[pos+1] === 12479 && str[pos+2] === 12540 && str[pos+3] === 12511 && str[pos+4] === 12540) return true; // [スターミー]
      if(str[pos+1] === 12488 && str[pos+2] === 12521 && str[pos+3] === 12452 && str[pos+4] === 12463) return true; // [ストライク]
      if(str[pos+1] === 12452 && str[pos+2] === 12463 && str[pos+3] === 12531) return true; // [スイクン]
      if(str[pos+1] === 12496 && str[pos+2] === 12513) return true; // [スバメ]
      if(str[pos+1] === 12508 && str[pos+2] === 12511 && str[pos+3] === 12540) return true; // [スボミー]
      if(str[pos+1] === 12459) { // [スカ]
        if(str[pos+2] === 12479 && str[pos+3] === 12531 && str[pos+4] === 12463) return true; // [スカタンク]
        if(str[pos+2] === 12531 && str[pos+3] === 12503 && str[pos+4] === 12540) return true; // [スカンプー]
        pos+=1; continue;
      }
      if(str[pos+1] === 12467 && str[pos+2] === 12523 && str[pos+3] === 12500) return true; // [スコルピ]
      pos+=1; continue;
    }
    if(str[pos] === 12509) { // [ポ]
      if(str[pos+1] === 12483) { // [ポッ]
        if(str[pos+2] === 12481 && str[pos+3] === 12515 && str[pos+4] === 12510) return true; // [ポッチャマ]
        if(str[pos+2] === 12509) return true; // [ポッポ]
        if(str[pos+2] === 12479 && str[pos+3] === 12452 && str[pos+4] === 12471) return true; // [ポッタイシ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12491 && str[pos+2] === 12540 && str[pos+3] === 12479) return true; // [ポニータ]
      if(str[pos+1] === 12522 && str[pos+2] === 12468 && str[pos+3] === 12531) { // [ポリゴン]
        return true; // [ポリゴン]
        if(str[pos+4] === 50) return true; // [ポリゴン2]
        if(str[pos+4] === 90) return true; // [ポリゴンZ]
        pos+=4; continue;
      }
      if(str[pos+1] === 12509 && str[pos+2] === 12483 && str[pos+3] === 12467) return true; // [ポポッコ]
      if(str[pos+1] === 12481 && str[pos+2] === 12456 && str[pos+3] === 12490) return true; // [ポチエナ]
      if(str[pos+1] === 12527 && str[pos+2] === 12523 && str[pos+3] === 12531) return true; // [ポワルン]
      pos+=1; continue;
    }
    if(str[pos] === 12500) { // [ピ]
      if(str[pos+1] === 12459 && str[pos+2] === 12481 && str[pos+3] === 12517 && str[pos+4] === 12454) return true; // [ピカチュウ]
      if(str[pos+1] === 12472 && str[pos+2] === 12519) { // [ピジョ]
        if(str[pos+3] === 12483 && str[pos+4] === 12488) return true; // [ピジョット]
        if(str[pos+3] === 12531) return true; // [ピジョン]
        pos+=3; continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12500) return true; // [ピッピ]
      if(str[pos+1] === 12463 && str[pos+2] === 12471 && str[pos+3] === 12540) return true; // [ピクシー]
      if(str[pos+1] === 12481 && str[pos+2] === 12517 && str[pos+3] === 12540) return true; // [ピチュー]
      if(str[pos+1] === 12451) return true; // [ピィ]
      if(str[pos+1] === 12531 && str[pos+2] === 12503 && str[pos+3] === 12463) return true; // [ピンプク]
      pos+=1; continue;
    }
    if(str[pos] === 12521) { // [ラ]
      if(str[pos+1] === 12452) { // [ライ]
        if(str[pos+2] === 12467 && str[pos+3] === 12454) return true; // [ライコウ]
        if(str[pos+2] === 12481 && str[pos+3] === 12517 && str[pos+4] === 12454) return true; // [ライチュウ]
        if(str[pos+2] === 12508 && str[pos+3] === 12523 && str[pos+4] === 12488) return true; // [ライボルト]
        pos+=1; continue;
      }
      if(str[pos+1] === 12483) { // [ラッ]
        if(str[pos+2] === 12461 && str[pos+3] === 12540) return true; // [ラッキー]
        if(str[pos+2] === 12479) return true; // [ラッタ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12501 && str[pos+2] === 12524 && str[pos+3] === 12471 && str[pos+4] === 12450) return true; // [ラフレシア]
      if(str[pos+1] === 12503 && str[pos+2] === 12521 && str[pos+3] === 12473) return true; // [ラプラス]
      if(str[pos+1] === 12531 && str[pos+2] === 12479 && str[pos+3] === 12540 && str[pos+4] === 12531) return true; // [ランターン]
      if(str[pos+1] === 12464 && str[pos+2] === 12521 && str[pos+3] === 12540 && str[pos+4] === 12472) return true; // [ラグラージ]
      if(str[pos+1] === 12523 && str[pos+2] === 12488 && str[pos+3] === 12473) return true; // [ラルトス]
      if(str[pos+1] === 12463 && str[pos+2] === 12521 && str[pos+3] === 12452) return true; // [ラクライ]
      if(str[pos+1] === 12502 && str[pos+2] === 12459 && str[pos+3] === 12473) return true; // [ラブカス]
      if(str[pos+1] === 12486 && str[pos+2] === 12451) { // [ラティ]
        if(str[pos+3] === 12450 && str[pos+4] === 12473) return true; // [ラティアス]
        if(str[pos+3] === 12458 && str[pos+4] === 12473) return true; // [ラティオス]
        pos+=3; continue;
      }
      if(str[pos+1] === 12512 && str[pos+2] === 12497 && str[pos+3] === 12523 && str[pos+4] === 12489) return true; // [ラムパルド]
      pos+=1; continue;
    }
    if(str[pos] === 12458) { // [オ]
      if(str[pos+1] === 12467 && str[pos+2] === 12522 && str[pos+3] === 12470 && str[pos+4] === 12523) return true; // [オコリザル]
      if(str[pos+1] === 12491) { // [オニ]
        if(str[pos+2] === 12473 && str[pos+3] === 12474 && str[pos+4] === 12513) return true; // [オニスズメ]
        if(str[pos+2] === 12489 && str[pos+3] === 12522 && str[pos+4] === 12523) return true; // [オニドリル]
        if(str[pos+2] === 12468 && str[pos+3] === 12540 && str[pos+4] === 12522) return true; // [オニゴーリ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12512) { // [オム]
        if(str[pos+2] === 12473 && str[pos+3] === 12479 && str[pos+4] === 12540) return true; // [オムスター]
        if(str[pos+2] === 12490 && str[pos+3] === 12452 && str[pos+4] === 12488) return true; // [オムナイト]
        pos+=1; continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12480 && str[pos+3] === 12452 && str[pos+4] === 12523) return true; // [オーダイル]
      if(str[pos+1] === 12479 && str[pos+2] === 12481) return true; // [オタチ]
      if(str[pos+1] === 12458) { // [オオ]
        if(str[pos+2] === 12473 && str[pos+3] === 12496 && str[pos+4] === 12513) return true; // [オオスバメ]
        if(str[pos+2] === 12479 && str[pos+3] === 12481) return true; // [オオタチ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12463 && str[pos+2] === 12479 && str[pos+3] === 12531) return true; // [オクタン]
      if(str[pos+1] === 12489 && str[pos+2] === 12471 && str[pos+3] === 12471) return true; // [オドシシ]
      pos+=1; continue;
    }
    if(str[pos] === 12450) { // [ア]
      if(str[pos+1] === 12474 && str[pos+2] === 12510 && str[pos+3] === 12458 && str[pos+4] === 12454) return true; // [アズマオウ]
      if(str[pos+1] === 12540) { // [アー]
        if(str[pos+2] === 12508) { // [アーボ]
          return true; // [アーボ]
          if(str[pos+3] === 12483 && str[pos+4] === 12463) return true; // [アーボック]
          pos+=2; continue;
        }
        if(str[pos+2] === 12510 && str[pos+3] === 12523 && str[pos+4] === 12489) return true; // [アーマルド]
        pos+=2; continue;
      }
      if(str[pos+1] === 12522) { // [アリ]
        if(str[pos+2] === 12450 && str[pos+3] === 12489 && str[pos+4] === 12473) return true; // [アリアドス]
        if(str[pos+2] === 12466 && str[pos+3] === 12452 && str[pos+4] === 12484) return true; // [アリゲイツ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12494 && str[pos+3] === 12540 && str[pos+4] === 12531) return true; // [アンノーン]
      if(str[pos+1] === 12481 && str[pos+2] === 12515 && str[pos+3] === 12514) return true; // [アチャモ]
      if(str[pos+1] === 12466 && str[pos+2] === 12495 && str[pos+3] === 12531 && str[pos+4] === 12488) return true; // [アゲハント]
      if(str[pos+1] === 12513) { // [アメ]
        if(str[pos+2] === 12479 && str[pos+3] === 12510) return true; // [アメタマ]
        if(str[pos+2] === 12514 && str[pos+3] === 12540 && str[pos+4] === 12473) return true; // [アメモース]
        pos+=1; continue;
      }
      if(str[pos+1] === 12469 && str[pos+2] === 12490 && str[pos+3] === 12531) return true; // [アサナン]
      if(str[pos+1] === 12494 && str[pos+2] === 12503 && str[pos+3] === 12473) return true; // [アノプス]
      if(str[pos+1] === 12502 && str[pos+2] === 12477 && str[pos+3] === 12523) return true; // [アブソル]
      if(str[pos+1] === 12464 && str[pos+2] === 12494 && str[pos+3] === 12512) return true; // [アグノム]
      if(str[pos+1] === 12523 && str[pos+2] === 12475 && str[pos+3] === 12454 && str[pos+4] === 12473) return true; // [アルセウス]
      pos+=1; continue;
    }
    if(str[pos] === 12469) { // [サ]
      if(str[pos+1] === 12527 && str[pos+2] === 12512 && str[pos+3] === 12521 && str[pos+4] === 12540) return true; // [サワムラー]
      if(str[pos+1] === 12531) { // [サン]
        if(str[pos+2] === 12480 && str[pos+3] === 12540) { // [サンダー]
          return true; // [サンダー]
          if(str[pos+4] === 12473) return true; // [サンダース]
          pos+=4; continue;
        }
        if(str[pos+2] === 12489) { // [サンド]
          return true; // [サンド]
          if(str[pos+3] === 12497 && str[pos+4] === 12531) return true; // [サンドパン]
          pos+=2; continue;
        }
        pos+=2; continue;
      }
      if(str[pos+1] === 12452) { // [サイ]
        if(str[pos+2] === 12489 && str[pos+3] === 12531) return true; // [サイドン]
        if(str[pos+2] === 12507 && str[pos+3] === 12540 && str[pos+4] === 12531) return true; // [サイホーン]
        pos+=1; continue;
      }
      if(str[pos+1] === 12491 && str[pos+2] === 12540 && str[pos+3] === 12468) return true; // [サニーゴ]
      if(str[pos+1] === 12490 && str[pos+2] === 12462 && str[pos+3] === 12521 && str[pos+4] === 12473) return true; // [サナギラス]
      if(str[pos+1] === 12540 && str[pos+2] === 12490 && str[pos+3] === 12452 && str[pos+4] === 12488) return true; // [サーナイト]
      if(str[pos+1] === 12513 && str[pos+2] === 12495 && str[pos+3] === 12480 && str[pos+4] === 12540) return true; // [サメハダー]
      if(str[pos+1] === 12508 && str[pos+2] === 12493 && str[pos+3] === 12450) return true; // [サボネア]
      if(str[pos+1] === 12510 && str[pos+2] === 12520 && str[pos+3] === 12540 && str[pos+4] === 12523) return true; // [サマヨール]
      if(str[pos+1] === 12463 && str[pos+2] === 12521 && str[pos+3] === 12499 && str[pos+4] === 12473) return true; // [サクラビス]
      pos+=1; continue;
    }
    if(str[pos] === 12491) { // [ニ]
      if(str[pos+1] === 12489) { // [ニド]
        if(str[pos+2] === 12521 && str[pos+3] === 12531) { // [ニドラン]
          if(str[pos+4] === 9792) return true; // [ニドラン♀]
          if(str[pos+4] === 9794) return true; // [ニドラン♂]
          pos+=4; continue;
        }
        if(str[pos+2] === 12522 && str[pos+3] === 12540) { // [ニドリー]
          if(str[pos+4] === 12490) return true; // [ニドリーナ]
          if(str[pos+4] === 12494) return true; // [ニドリーノ]
          pos+=4; continue;
        }
        if(str[pos+2] === 12463 && str[pos+3] === 12452 && str[pos+4] === 12531) return true; // [ニドクイン]
        if(str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true; // [ニドキング]
        pos+=1; continue;
      }
      if(str[pos+1] === 12515) { // [ニャ]
        if(str[pos+2] === 12523 && str[pos+3] === 12510 && str[pos+4] === 12540) return true; // [ニャルマー]
        if(str[pos+2] === 12540 && str[pos+3] === 12473) return true; // [ニャース]
        pos+=2; continue;
      }
      if(str[pos+1] === 12519 && str[pos+2] === 12525) { // [ニョロ]
        if(str[pos+3] === 12478) return true; // [ニョロゾ]
        if(str[pos+3] === 12514) return true; // [ニョロモ]
        if(str[pos+3] === 12508 && str[pos+4] === 12531) return true; // [ニョロボン]
        if(str[pos+3] === 12488 && str[pos+4] === 12494) return true; // [ニョロトノ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12517 && str[pos+2] === 12540 && str[pos+3] === 12521) return true; // [ニューラ]
      pos+=1; continue;
    }
    if(str[pos] === 12525) { // [ロ]
      if(str[pos+1] === 12467 && str[pos+2] === 12531) return true; // [ロコン]
      if(str[pos+1] === 12476 && str[pos+2] === 12522 && str[pos+3] === 12450) return true; // [ロゼリア]
      if(str[pos+1] === 12474 && str[pos+2] === 12524 && str[pos+3] === 12452 && str[pos+4] === 12489) return true; // [ロズレイド]
      if(str[pos+1] === 12488 && str[pos+2] === 12512) return true; // [ロトム]
      pos+=1; continue;
    }
    if(str[pos] === 12503) { // [プ]
      if(str[pos+1] === 12463 && str[pos+2] === 12522 && str[pos+3] === 12531) return true; // [プクリン]
      if(str[pos+1] === 12522 && str[pos+2] === 12531) return true; // [プリン]
      if(str[pos+1] === 12486 && str[pos+2] === 12521) return true; // [プテラ]
      if(str[pos+1] === 12503 && str[pos+2] === 12522 && str[pos+3] === 12531) return true; // [ププリン]
      if(str[pos+1] === 12521 && str[pos+2] === 12473 && str[pos+3] === 12523) return true; // [プラスル]
      pos+=1; continue;
    }
    if(str[pos] === 12474) { // [ズ]
      if(str[pos+1] === 12460 && str[pos+2] === 12452 && str[pos+3] === 12489 && str[pos+4] === 12473) return true; // [ズガイドス]
      if(str[pos+1] === 12496 && str[pos+2] === 12483 && str[pos+3] === 12488) return true; // [ズバット]
      pos+=1; continue;
    }
    if(str[pos] === 12468) { // [ゴ]
      if(str[pos+1] === 12523) { // [ゴル]
        if(str[pos+2] === 12480 && str[pos+3] === 12483 && str[pos+4] === 12463) return true; // [ゴルダック]
        if(str[pos+2] === 12496 && str[pos+3] === 12483 && str[pos+4] === 12488) return true; // [ゴルバット]
        pos+=1; continue;
      }
      if(str[pos+1] === 12540) { // [ゴー]
        if(str[pos+2] === 12473) { // [ゴース]
          return true; // [ゴース]
          if(str[pos+3] === 12488) return true; // [ゴースト]
          pos+=2; continue;
        }
        if(str[pos+2] === 12522 && str[pos+3] === 12461 && str[pos+4] === 12540) return true; // [ゴーリキー]
        pos+=2; continue;
      }
      if(str[pos+1] === 12525 && str[pos+2] === 12540) { // [ゴロー]
        if(str[pos+3] === 12491 && str[pos+4] === 12515) return true; // [ゴローニャ]
        if(str[pos+3] === 12531) return true; // [ゴローン]
        pos+=3; continue;
      }
      if(str[pos+1] === 12510 && str[pos+2] === 12478 && str[pos+3] === 12454) return true; // [ゴマゾウ]
      if(str[pos+1] === 12491 && str[pos+2] === 12519 && str[pos+3] === 12491 && str[pos+4] === 12519) return true; // [ゴニョニョ]
      if(str[pos+1] === 12463 && str[pos+2] === 12522 && str[pos+3] === 12531) return true; // [ゴクリン]
      if(str[pos+1] === 12454 && str[pos+2] === 12459 && str[pos+3] === 12470 && str[pos+4] === 12523) return true; // [ゴウカザル]
      if(str[pos+1] === 12531 && str[pos+2] === 12505) return true; // [ゴンベ]
      pos+=1; continue;
    }
    if(str[pos] === 12490) { // [ナ]
      if(str[pos+1] === 12478 && str[pos+2] === 12494 && str[pos+3] === 12463 && str[pos+4] === 12469) return true; // [ナゾノクサ]
      if(str[pos+1] === 12483) { // [ナッ]
        if(str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12540) return true; // [ナックラー]
        if(str[pos+2] === 12471 && str[pos+3] === 12540) return true; // [ナッシー]
        pos+=2; continue;
      }
      if(str[pos+1] === 12510) { // [ナマ]
        if(str[pos+2] === 12465 && str[pos+3] === 12525) return true; // [ナマケロ]
        if(str[pos+2] === 12474 && str[pos+3] === 12531) return true; // [ナマズン]
        pos+=1; continue;
      }
      if(str[pos+1] === 12456 && str[pos+2] === 12488 && str[pos+3] === 12523) return true; // [ナエトル]
      pos+=1; continue;
    }
    if(str[pos] === 12463) { // [ク]
      if(str[pos+1] === 12469 && str[pos+2] === 12452 && str[pos+3] === 12495 && str[pos+4] === 12490) return true; // [クサイハナ]
      if(str[pos+1] === 12521 && str[pos+2] === 12502) return true; // [クラブ]
      if(str[pos+1] === 12525 && str[pos+2] === 12496 && str[pos+3] === 12483 && str[pos+4] === 12488) return true; // [クロバット]
      if(str[pos+1] === 12492 && str[pos+2] === 12462 && str[pos+3] === 12480 && str[pos+4] === 12510) return true; // [クヌギダマ]
      if(str[pos+1] === 12481 && str[pos+2] === 12540 && str[pos+3] === 12488) return true; // [クチート]
      if(str[pos+1] === 12524 && str[pos+2] === 12475 && str[pos+3] === 12522 && str[pos+4] === 12450) return true; // [クレセリア]
      pos+=1; continue;
    }
    if(str[pos] === 12497) { // [パ]
      if(str[pos+1] === 12454 && str[pos+2] === 12527 && str[pos+3] === 12454) return true; // [パウワウ]
      if(str[pos+1] === 12521) { // [パラ]
        if(str[pos+2] === 12473) return true; // [パラス]
        if(str[pos+2] === 12475 && str[pos+3] === 12463 && str[pos+4] === 12488) return true; // [パラセクト]
        pos+=1; continue;
      }
      if(str[pos+1] === 12523) { // [パル]
        if(str[pos+2] === 12461 && str[pos+3] === 12450) return true; // [パルキア]
        if(str[pos+2] === 12471 && str[pos+3] === 12455 && str[pos+4] === 12531) return true; // [パルシェン]
        pos+=1; continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12481 && str[pos+3] === 12540 && str[pos+4] === 12523) return true; // [パッチール]
      if(str[pos+1] === 12540 && str[pos+2] === 12523 && str[pos+3] === 12523) return true; // [パールル]
      if(str[pos+1] === 12481 && str[pos+2] === 12522 && str[pos+3] === 12473) return true; // [パチリス]
      pos+=1; continue;
    }
    if(str[pos] === 12514) { // [モ]
      if(str[pos+1] === 12523 && str[pos+2] === 12501 && str[pos+3] === 12457 && str[pos+4] === 12531) return true; // [モルフォン]
      if(str[pos+1] === 12531 && str[pos+2] === 12472 && str[pos+3] === 12515 && str[pos+4] === 12521) return true; // [モンジャラ]
      if(str[pos+1] === 12467 && str[pos+2] === 12467) return true; // [モココ]
      if(str[pos+1] === 12454 && str[pos+2] === 12459 && str[pos+3] === 12470 && str[pos+4] === 12523) return true; // [モウカザル]
      if(str[pos+1] === 12472 && str[pos+2] === 12515 && str[pos+3] === 12531 && str[pos+4] === 12508) return true; // [モジャンボ]
      pos+=1; continue;
    }
    if(str[pos] === 12487) { // [デ]
      if(str[pos+1] === 12451) { // [ディ]
        if(str[pos+2] === 12450 && str[pos+3] === 12523 && str[pos+4] === 12460) return true; // [ディアルガ]
        if(str[pos+2] === 12464 && str[pos+3] === 12480) return true; // [ディグダ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12522 && str[pos+3] === 12517 && str[pos+4] === 12454) return true; // [デンリュウ]
      if(str[pos+1] === 12522 && str[pos+2] === 12496 && str[pos+3] === 12540 && str[pos+4] === 12489) return true; // [デリバード]
      if(str[pos+1] === 12523 && str[pos+2] === 12499 && str[pos+3] === 12523) return true; // [デルビル]
      if(str[pos+1] === 12458 && str[pos+2] === 12461 && str[pos+3] === 12471 && str[pos+4] === 12473) return true; // [デオキシス]
      pos+=1; continue;
    }
    if(str[pos] === 12480) { // [ダ]
      if(str[pos+1] === 12464 && str[pos+2] === 12488 && str[pos+3] === 12522 && str[pos+4] === 12458) return true; // [ダグトリオ]
      if(str[pos+1] === 12540) { // [ダー]
        if(str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12452) return true; // [ダークライ]
        if(str[pos+2] === 12486 && str[pos+3] === 12531 && str[pos+4] === 12464) return true; // [ダーテング]
        pos+=2; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12496 && str[pos+3] === 12523) return true; // [ダンバル]
      if(str[pos+1] === 12452 && str[pos+2] === 12494 && str[pos+3] === 12540 && str[pos+4] === 12474) return true; // [ダイノーズ]
      pos+=1; continue;
    }
    if(str[pos] === 12506) { // [ペ]
      if(str[pos+1] === 12522 && str[pos+2] === 12483 && str[pos+3] === 12497 && str[pos+4] === 12540) return true; // [ペリッパー]
      if(str[pos+1] === 12523 && str[pos+2] === 12471 && str[pos+3] === 12450 && str[pos+4] === 12531) return true; // [ペルシアン]
      if(str[pos+1] === 12521 && str[pos+2] === 12483 && str[pos+3] === 12503) return true; // [ペラップ]
      pos+=1; continue;
    }
    if(str[pos] === 12510) { // [マ]
      if(str[pos+1] === 12480 && str[pos+2] === 12484 && str[pos+3] === 12508 && str[pos+4] === 12511) return true; // [マダツボミ]
      if(str[pos+1] === 12531) { // [マン]
        if(str[pos+2] === 12461 && str[pos+3] === 12540) return true; // [マンキー]
        if(str[pos+2] === 12479 && str[pos+3] === 12452 && str[pos+4] === 12531) return true; // [マンタイン]
        if(str[pos+2] === 12512 && str[pos+3] === 12540) return true; // [マンムー]
        pos+=2; continue;
      }
      if(str[pos+1] === 12523) { // [マル]
        if(str[pos+2] === 12494 && str[pos+3] === 12540 && str[pos+4] === 12512) return true; // [マルノーム]
        if(str[pos+2] === 12510 && str[pos+3] === 12452 && str[pos+4] === 12531) return true; // [マルマイン]
        pos+=1; continue;
      }
      if(str[pos+1] === 12479 && str[pos+2] === 12489 && str[pos+3] === 12460 && str[pos+4] === 12473) return true; // [マタドガス]
      if(str[pos+1] === 12464) { // [マグ]
        if(str[pos+2] === 12459 && str[pos+3] === 12523 && str[pos+4] === 12468) return true; // [マグカルゴ]
        if(str[pos+2] === 12510) { // [マグマ]
          if(str[pos+3] === 12483 && str[pos+4] === 12464) return true; // [マグマッグ]
          if(str[pos+3] === 12521 && str[pos+4] === 12471) return true; // [マグマラシ]
          pos+=2; continue;
        }
        pos+=1; continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12523) { // [マリル]
        return true; // [マリル]
        if(str[pos+3] === 12522) return true; // [マリルリ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12473 && str[pos+3] === 12464 && str[pos+4] === 12510) return true; // [マッスグマ]
      if(str[pos+1] === 12518 && str[pos+2] === 12523 && str[pos+3] === 12489) return true; // [マユルド]
      if(str[pos+1] === 12463 && str[pos+2] === 12494 && str[pos+3] === 12471 && str[pos+4] === 12479) return true; // [マクノシタ]
      if(str[pos+1] === 12452 && str[pos+2] === 12490 && str[pos+3] === 12531) return true; // [マイナン]
      if(str[pos+1] === 12493 && str[pos+2] === 12493) return true; // [マネネ]
      if(str[pos+1] === 12473 && str[pos+2] === 12461 && str[pos+3] === 12483 && str[pos+4] === 12497) return true; // [マスキッパ]
      if(str[pos+1] === 12491 && str[pos+2] === 12517 && str[pos+3] === 12540 && str[pos+4] === 12521) return true; // [マニューラ]
      if(str[pos+1] === 12490 && str[pos+2] === 12501 && str[pos+3] === 12451) return true; // [マナフィ]
      pos+=1; continue;
    }
    if(str[pos] === 12460) { // [ガ]
      if(str[pos+1] === 12521 && str[pos+2] === 12460 && str[pos+3] === 12521) return true; // [ガラガラ]
      if(str[pos+1] === 12540) { // [ガー]
        if(str[pos+2] === 12487 && str[pos+3] === 12451) return true; // [ガーディ]
        if(str[pos+2] === 12513 && str[pos+3] === 12452 && str[pos+4] === 12523) return true; // [ガーメイル]
        pos+=2; continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12540 && str[pos+3] === 12521) return true; // [ガルーラ]
      if(str[pos+1] === 12496 && str[pos+2] === 12452 && str[pos+3] === 12488) return true; // [ガバイト]
      if(str[pos+1] === 12502 && str[pos+2] === 12522 && str[pos+3] === 12450 && str[pos+4] === 12473) return true; // [ガブリアス]
      pos+=1; continue;
    }
    if(str[pos] === 12454) { // [ウ]
      if(str[pos+1] === 12452 && str[pos+2] === 12531 && str[pos+3] === 12487 && str[pos+4] === 12451) return true; // [ウインディ]
      if(str[pos+1] === 12484) { // [ウツ]
        if(str[pos+2] === 12489 && str[pos+3] === 12531) return true; // [ウツドン]
        if(str[pos+2] === 12508 && str[pos+3] === 12483 && str[pos+4] === 12488) return true; // [ウツボット]
        pos+=1; continue;
      }
      if(str[pos+1] === 12477) { // [ウソ]
        if(str[pos+2] === 12483 && str[pos+3] === 12461 && str[pos+4] === 12540) return true; // [ウソッキー]
        if(str[pos+2] === 12495 && str[pos+3] === 12481) return true; // [ウソハチ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12497 && str[pos+2] === 12540) return true; // [ウパー]
      if(str[pos+1] === 12522 && str[pos+2] === 12512 && str[pos+3] === 12540) return true; // [ウリムー]
      pos+=1; continue;
    }
    if(str[pos] === 12465) { // [ケ]
      if(str[pos+1] === 12531 && str[pos+2] === 12479 && str[pos+3] === 12525 && str[pos+4] === 12473) return true; // [ケンタロス]
      if(str[pos+1] === 12540 && str[pos+2] === 12471 && str[pos+3] === 12451) return true; // [ケーシィ]
      if(str[pos+1] === 12512 && str[pos+2] === 12483 && str[pos+3] === 12477) return true; // [ケムッソ]
      if(str[pos+1] === 12483 && str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true; // [ケッキング]
      if(str[pos+1] === 12452 && str[pos+2] === 12467 && str[pos+3] === 12454 && str[pos+4] === 12458) return true; // [ケイコウオ]
      pos+=1; continue;
    }
    if(str[pos] === 12518) { // [ユ]
      if(str[pos+1] === 12524 && str[pos+2] === 12452 && str[pos+3] === 12489 && str[pos+4] === 12523) return true; // [ユレイドル]
      if(str[pos+1] === 12531 && str[pos+2] === 12466 && str[pos+3] === 12521 && str[pos+4] === 12540) return true; // [ユンゲラー]
      if(str[pos+1] === 12461) { // [ユキ]
        if(str[pos+2] === 12459 && str[pos+3] === 12502 && str[pos+4] === 12522) return true; // [ユキカブリ]
        if(str[pos+2] === 12527 && str[pos+3] === 12521 && str[pos+4] === 12471) return true; // [ユキワラシ]
        if(str[pos+2] === 12494 && str[pos+3] === 12458 && str[pos+4] === 12540) return true; // [ユキノオー]
        if(str[pos+2] === 12513 && str[pos+3] === 12494 && str[pos+4] === 12467) return true; // [ユキメノコ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12463 && str[pos+2] === 12471 && str[pos+3] === 12540) return true; // [ユクシー]
      pos+=1; continue;
    }
    if(str[pos] === 12527) { // [ワ]
      if(str[pos+1] === 12491 && str[pos+2] === 12494 && str[pos+3] === 12467) return true; // [ワニノコ]
      if(str[pos+1] === 12531 && str[pos+2] === 12522 && str[pos+3] === 12461 && str[pos+4] === 12540) return true; // [ワンリキー]
      if(str[pos+1] === 12479 && str[pos+2] === 12483 && str[pos+3] === 12467) return true; // [ワタッコ]
      if(str[pos+1] === 12459 && str[pos+2] === 12471 && str[pos+3] === 12515 && str[pos+4] === 12514) return true; // [ワカシャモ]
      pos+=1; continue;
    }
    if(str[pos] === 12513) { // [メ]
      if(str[pos+1] === 12479) { // [メタ]
        if(str[pos+2] === 12514 && str[pos+3] === 12531) return true; // [メタモン]
        if(str[pos+2] === 12531 && str[pos+3] === 12464) return true; // [メタング]
        if(str[pos+2] === 12464 && str[pos+3] === 12525 && str[pos+4] === 12473) return true; // [メタグロス]
        pos+=1; continue;
      }
      if(str[pos+1] === 12494 && str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12466) return true; // [メノクラゲ]
      if(str[pos+1] === 12460) { // [メガ]
        if(str[pos+2] === 12491 && str[pos+3] === 12454 && str[pos+4] === 12512) return true; // [メガニウム]
        if(str[pos+2] === 12516 && str[pos+3] === 12531 && str[pos+4] === 12510) return true; // [メガヤンマ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12503) return true; // [メリープ]
      pos+=1; continue;
    }
    if(str[pos] === 12489) { // [ド]
      if(str[pos+1] === 12463) { // [ドク]
        if(str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12466) return true; // [ドククラゲ]
        if(str[pos+2] === 12465 && str[pos+3] === 12452 && str[pos+4] === 12523) return true; // [ドクケイル]
        if(str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12464) return true; // [ドクロッグ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12540) { // [ドー]
        if(str[pos+2] === 12489) { // [ドード]
          if(str[pos+3] === 12522 && str[pos+4] === 12458) return true; // [ドードリオ]
          if(str[pos+3] === 12540) return true; // [ドードー]
          pos+=2; continue;
        }
        if(str[pos+2] === 12502 && str[pos+3] === 12523) return true; // [ドーブル]
        if(str[pos+2] === 12511 && str[pos+3] === 12521 && str[pos+4] === 12540) return true; // [ドーミラー]
        if(str[pos+2] === 12479 && str[pos+3] === 12463 && str[pos+4] === 12531) return true; // [ドータクン]
        pos+=2; continue;
      }
      if(str[pos+1] === 12460 && str[pos+2] === 12540 && str[pos+3] === 12473) return true; // [ドガース]
      if(str[pos+1] === 12531) { // [ドン]
        if(str[pos+2] === 12501 && str[pos+3] === 12449 && str[pos+4] === 12531) return true; // [ドンファン]
        if(str[pos+2] === 12513 && str[pos+3] === 12523) return true; // [ドンメル]
        if(str[pos+2] === 12459 && str[pos+3] === 12521 && str[pos+4] === 12473) return true; // [ドンカラス]
        pos+=2; continue;
      }
      if(str[pos+1] === 12468 && str[pos+2] === 12540 && str[pos+3] === 12512) return true; // [ドゴーム]
      if(str[pos+1] === 12472 && str[pos+2] === 12519 && str[pos+3] === 12483 && str[pos+4] === 12481) return true; // [ドジョッチ]
      if(str[pos+1] === 12479 && str[pos+2] === 12452 && str[pos+3] === 12488 && str[pos+4] === 12473) return true; // [ドタイトス]
      if(str[pos+1] === 12521 && str[pos+2] === 12500 && str[pos+3] === 12458 && str[pos+4] === 12531) return true; // [ドラピオン]
      if(str[pos+1] === 12469 && str[pos+2] === 12452 && str[pos+3] === 12489 && str[pos+4] === 12531) return true; // [ドサイドン]
      pos+=1; continue;
    }
    if(str[pos] === 12452) { // [イ]
      if(str[pos+1] === 12471 && str[pos+2] === 12484 && str[pos+3] === 12502 && str[pos+4] === 12486) return true; // [イシツブテ]
      if(str[pos+1] === 12527 && str[pos+2] === 12540 && str[pos+3] === 12463) return true; // [イワーク]
      if(str[pos+1] === 12540 && str[pos+2] === 12502 && str[pos+3] === 12452) return true; // [イーブイ]
      if(str[pos+1] === 12488 && str[pos+2] === 12510 && str[pos+3] === 12523) return true; // [イトマル]
      if(str[pos+1] === 12494 && str[pos+2] === 12512 && str[pos+3] === 12540) return true; // [イノムー]
      if(str[pos+1] === 12523 && str[pos+2] === 12511 && str[pos+3] === 12540 && str[pos+4] === 12476) return true; // [イルミーゼ]
      pos+=1; continue;
    }
    if(str[pos] === 12462) { // [ギ]
      if(str[pos+1] === 12515) { // [ギャ]
        if(str[pos+2] === 12521 && str[pos+3] === 12489 && str[pos+4] === 12473) return true; // [ギャラドス]
        if(str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12503) return true; // [ギャロップ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12521 && str[pos+2] === 12486 && str[pos+3] === 12451 && str[pos+4] === 12490) return true; // [ギラティナ]
      pos+=1; continue;
    }
    if(str[pos] === 12516) { // [ヤ]
      if(str[pos+1] === 12489) { // [ヤド]
        if(str[pos+2] === 12521 && str[pos+3] === 12531) return true; // [ヤドラン]
        if(str[pos+2] === 12531) return true; // [ヤドン]
        if(str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true; // [ヤドキング]
        pos+=1; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12516 && str[pos+3] === 12531 && str[pos+4] === 12510) return true; // [ヤンヤンマ]
      if(str[pos+1] === 12511) { // [ヤミ]
        if(str[pos+2] === 12459 && str[pos+3] === 12521 && str[pos+4] === 12473) return true; // [ヤミカラス]
        if(str[pos+2] === 12521 && str[pos+3] === 12511) return true; // [ヤミラミ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12461 && str[pos+3] === 12514 && str[pos+4] === 12494) return true; // [ヤルキモノ]
      if(str[pos+1] === 12472 && str[pos+2] === 12525 && str[pos+3] === 12531) return true; // [ヤジロン]
      pos+=1; continue;
    }
    if(str[pos] === 12524) { // [レ]
      if(str[pos+1] === 12450 && str[pos+2] === 12467 && str[pos+3] === 12452 && str[pos+4] === 12523) return true; // [レアコイル]
      if(str[pos+1] === 12487 && str[pos+2] === 12451) { // [レディ]
        if(str[pos+3] === 12450 && str[pos+4] === 12531) return true; // [レディアン]
        if(str[pos+3] === 12496) return true; // [レディバ]
        pos+=3; continue;
      }
      if(str[pos+1] === 12472) { // [レジ]
        if(str[pos+2] === 12450 && str[pos+3] === 12452 && str[pos+4] === 12473) return true; // [レジアイス]
        if(str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12463) return true; // [レジロック]
        if(str[pos+2] === 12473 && str[pos+3] === 12481 && str[pos+4] === 12523) return true; // [レジスチル]
        if(str[pos+2] === 12462 && str[pos+3] === 12460 && str[pos+4] === 12473) return true; // [レジギガス]
        pos+=1; continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12463 && str[pos+3] === 12454 && str[pos+4] === 12470) return true; // [レックウザ]
      if(str[pos+1] === 12531 && str[pos+2] === 12488 && str[pos+3] === 12521 && str[pos+4] === 12540) return true; // [レントラー]
      pos+=1; continue;
    }
    if(str[pos] === 12472) { // [ジ]
      if(str[pos+1] === 12464 && str[pos+2] === 12470 && str[pos+3] === 12464 && str[pos+4] === 12510) return true; // [ジグザグマ]
      if(str[pos+1] === 12517) { // [ジュ]
        if(str[pos+2] === 12468 && str[pos+3] === 12531) return true; // [ジュゴン]
        if(str[pos+2] === 12503 && str[pos+3] === 12488 && str[pos+4] === 12523) return true; // [ジュプトル]
        if(str[pos+2] === 12459 && str[pos+3] === 12452 && str[pos+4] === 12531) return true; // [ジュカイン]
        if(str[pos+2] === 12506 && str[pos+3] === 12483 && str[pos+4] === 12479) return true; // [ジュペッタ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12521 && str[pos+3] === 12531 && str[pos+4] === 12473) return true; // [ジーランス]
      if(str[pos+1] === 12521 && str[pos+2] === 12540 && str[pos+3] === 12481) return true; // [ジラーチ]
      if(str[pos+1] === 12496 && str[pos+2] === 12467 && str[pos+3] === 12452 && str[pos+4] === 12523) return true; // [ジバコイル]
      pos+=1; continue;
    }
    if(str[pos] === 12505) { // [ベ]
      if(str[pos+1] === 12488 && str[pos+2] === 12505) { // [ベトベ]
        if(str[pos+3] === 12479 && str[pos+4] === 12540) return true; // [ベトベター]
        if(str[pos+3] === 12488 && str[pos+4] === 12531) return true; // [ベトベトン]
        pos+=2; continue;
      }
      if(str[pos+1] === 12525) { // [ベロ]
        if(str[pos+2] === 12505 && str[pos+3] === 12523 && str[pos+4] === 12488) return true; // [ベロベルト]
        if(str[pos+2] === 12522 && str[pos+3] === 12531 && str[pos+4] === 12460) return true; // [ベロリンガ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12452 && str[pos+2] === 12522 && str[pos+3] === 12540 && str[pos+4] === 12501) return true; // [ベイリーフ]
      pos+=1; continue;
    }
    if(str[pos] === 12471) { // [シ]
      if(str[pos+1] === 12455) { // [シェ]
        if(str[pos+2] === 12452 && str[pos+3] === 12511) return true; // [シェイミ]
        if(str[pos+2] === 12523 && str[pos+3] === 12480 && str[pos+4] === 12540) return true; // [シェルダー]
        pos+=2; continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12489 && str[pos+3] === 12521) return true; // [シードラ]
      if(str[pos+1] === 12515 && str[pos+2] === 12527 && str[pos+3] === 12540 && str[pos+4] === 12474) return true; // [シャワーズ]
      if(str[pos+1] === 12470 && str[pos+2] === 12522 && str[pos+3] === 12460 && str[pos+4] === 12540) return true; // [シザリガー]
      pos+=1; continue;
    }
    if(str[pos] === 12466 && str[pos+1] === 12531 && str[pos+2] === 12460 && str[pos+3] === 12540) return true; // [ゲンガー]
    if(str[pos] === 12479) { // [タ]
      if(str[pos+1] === 12483 && str[pos+2] === 12484 && str[pos+3] === 12540) return true; // [タッツー]
      if(str[pos+1] === 12510) { // [タマ]
        if(str[pos+2] === 12470 && str[pos+3] === 12521 && str[pos+4] === 12471) return true; // [タマザラシ]
        if(str[pos+2] === 12479 && str[pos+3] === 12510) return true; // [タマタマ]
        if(str[pos+2] === 12531 && str[pos+3] === 12479) return true; // [タマンタ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12493 && str[pos+2] === 12508 && str[pos+3] === 12540) return true; // [タネボー]
      if(str[pos+1] === 12484 && str[pos+2] === 12505 && str[pos+3] === 12452) return true; // [タツベイ]
      if(str[pos+1] === 12486 && str[pos+2] === 12488 && str[pos+3] === 12503 && str[pos+4] === 12473) return true; // [タテトプス]
      pos+=1; continue;
    }
    if(str[pos] === 12456) { // [エ]
      if(str[pos+1] === 12499 && str[pos+2] === 12527 && str[pos+3] === 12521 && str[pos+4] === 12540) return true; // [エビワラー]
      if(str[pos+1] === 12524) { // [エレ]
        if(str[pos+2] === 12461) { // [エレキ]
          if(str[pos+3] === 12483 && str[pos+4] === 12489) return true; // [エレキッド]
          if(str[pos+3] === 12502 && str[pos+4] === 12523) return true; // [エレキブル]
          pos+=2; continue;
        }
        if(str[pos+2] === 12502 && str[pos+3] === 12540) return true; // [エレブー]
        pos+=1; continue;
      }
      if(str[pos+1] === 12452 && str[pos+2] === 12497 && str[pos+3] === 12512) return true; // [エイパム]
      if(str[pos+1] === 12540 && str[pos+2] === 12501 && str[pos+3] === 12451) return true; // [エーフィ]
      if(str[pos+1] === 12450 && str[pos+2] === 12540 && str[pos+3] === 12512 && str[pos+4] === 12489) return true; // [エアームド]
      if(str[pos+1] === 12531) { // [エン]
        if(str[pos+2] === 12486 && str[pos+3] === 12452) return true; // [エンテイ]
        if(str[pos+2] === 12506 && str[pos+3] === 12523 && str[pos+4] === 12488) return true; // [エンペルト]
        pos+=2; continue;
      }
      if(str[pos+1] === 12493 && str[pos+2] === 12467) { // [エネコ]
        return true; // [エネコ]
        if(str[pos+3] === 12525 && str[pos+4] === 12525) return true; // [エネコロロ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12486 && str[pos+2] === 12508 && str[pos+3] === 12540 && str[pos+4] === 12473) return true; // [エテボース]
      if(str[pos+1] === 12523 && str[pos+2] === 12524 && str[pos+3] === 12452 && str[pos+4] === 12489) return true; // [エルレイド]
      if(str[pos+1] === 12512 && str[pos+2] === 12522 && str[pos+3] === 12483 && str[pos+4] === 12488) return true; // [エムリット]
      pos+=1; continue;
    }
    if(str[pos] === 12523) { // [ル]
      if(str[pos+1] === 12462 && str[pos+2] === 12450) return true; // [ルギア]
      if(str[pos+1] === 12540 && str[pos+2] === 12472 && str[pos+3] === 12517 && str[pos+4] === 12521) return true; // [ルージュラ]
      if(str[pos+1] === 12531 && str[pos+2] === 12497 && str[pos+3] === 12483 && str[pos+4] === 12497) return true; // [ルンパッパ]
      if(str[pos+1] === 12522 && str[pos+2] === 12522) return true; // [ルリリ]
      if(str[pos+1] === 12490 && str[pos+2] === 12488 && str[pos+3] === 12540 && str[pos+4] === 12531) return true; // [ルナトーン]
      if(str[pos+1] === 12463 && str[pos+2] === 12471 && str[pos+3] === 12458) return true; // [ルクシオ]
      if(str[pos+1] === 12459 && str[pos+2] === 12522 && str[pos+3] === 12458) return true; // [ルカリオ]
      pos+=1; continue;
    }
    if(str[pos] === 12502) { // [ブ]
      if(str[pos+1] === 12521 && str[pos+2] === 12483 && str[pos+3] === 12461 && str[pos+4] === 12540) return true; // [ブラッキー]
      if(str[pos+1] === 12540) { // [ブー]
        if(str[pos+2] === 12473 && str[pos+3] === 12479 && str[pos+4] === 12540) return true; // [ブースター]
        if(str[pos+2] === 12496 && str[pos+3] === 12540) { // [ブーバー]
          return true; // [ブーバー]
          if(str[pos+4] === 12531) return true; // [ブーバーン]
          pos+=4; continue;
        }
        if(str[pos+2] === 12500 && str[pos+3] === 12483 && str[pos+4] === 12464) return true; // [ブーピッグ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12540) return true; // [ブルー]
      if(str[pos+1] === 12499 && str[pos+2] === 12451) return true; // [ブビィ]
      if(str[pos+1] === 12452 && str[pos+2] === 12476 && str[pos+3] === 12523) return true; // [ブイゼル]
      if(str[pos+1] === 12491 && str[pos+2] === 12515 && str[pos+3] === 12483 && str[pos+4] === 12488) return true; // [ブニャット]
      pos+=1; continue;
    }
    if(str[pos] === 12511) { // [ミ]
      if(str[pos+1] === 12491 && str[pos+2] === 12522 && str[pos+3] === 12517 && str[pos+4] === 12454) return true; // [ミニリュウ]
      if(str[pos+1] === 12517 && str[pos+2] === 12454) { // [ミュウ]
        return true; // [ミュウ]
        if(str[pos+3] === 12484 && str[pos+4] === 12540) return true; // [ミュウツー]
        pos+=2; continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12479 && str[pos+3] === 12531 && str[pos+4] === 12463) return true; // [ミルタンク]
      if(str[pos+1] === 12474 && str[pos+2] === 12468 && str[pos+3] === 12525 && str[pos+4] === 12454) return true; // [ミズゴロウ]
      if(str[pos+1] === 12525 && str[pos+2] === 12459 && str[pos+3] === 12525 && str[pos+4] === 12473) return true; // [ミロカロス]
      if(str[pos+1] === 12494) { // [ミノ]
        if(str[pos+2] === 12510 && str[pos+3] === 12480 && str[pos+4] === 12512) return true; // [ミノマダム]
        if(str[pos+2] === 12512 && str[pos+3] === 12483 && str[pos+4] === 12481) return true; // [ミノムッチ]
        pos+=1; continue;
      }
      if(str[pos+1] === 12484 && str[pos+2] === 12495 && str[pos+3] === 12491 && str[pos+4] === 12540) return true; // [ミツハニー]
      if(str[pos+1] === 12511 && str[pos+2] === 12525) { // [ミミロ]
        if(str[pos+3] === 12483 && str[pos+4] === 12503) return true; // [ミミロップ]
        if(str[pos+3] === 12523) return true; // [ミミロル]
        pos+=2; continue;
      }
      if(str[pos+1] === 12459 && str[pos+2] === 12523 && str[pos+3] === 12466) return true; // [ミカルゲ]
      pos+=1; continue;
    }
    if(str[pos] === 12495) { // [ハ]
      if(str[pos+1] === 12463 && str[pos+2] === 12522 && str[pos+3] === 12517 && str[pos+4] === 12540) return true; // [ハクリュー]
      if(str[pos+1] === 12493 && str[pos+2] === 12483 && str[pos+3] === 12467) return true; // [ハネッコ]
      if(str[pos+1] === 12460 && str[pos+2] === 12493 && str[pos+3] === 12540 && str[pos+4] === 12523) return true; // [ハガネール]
      if(str[pos+1] === 12522) { // [ハリ]
        if(str[pos+2] === 12486 && str[pos+3] === 12516 && str[pos+4] === 12510) return true; // [ハリテヤマ]
        if(str[pos+2] === 12540 && str[pos+3] === 12475 && str[pos+4] === 12531) return true; // [ハリーセン]
        pos+=1; continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12469 && str[pos+3] === 12512) return true; // [ハッサム]
      if(str[pos+1] === 12500 && str[pos+2] === 12490 && str[pos+3] === 12473) return true; // [ハピナス]
      if(str[pos+1] === 12473) { // [ハス]
        if(str[pos+2] === 12502 && str[pos+3] === 12524 && str[pos+4] === 12525) return true; // [ハスブレロ]
        if(str[pos+2] === 12508 && str[pos+3] === 12540) return true; // [ハスボー]
        pos+=1; continue;
      }
      if(str[pos+1] === 12502 && str[pos+2] === 12493 && str[pos+3] === 12540 && str[pos+4] === 12463) return true; // [ハブネーク]
      if(str[pos+1] === 12531 && str[pos+2] === 12486 && str[pos+3] === 12540 && str[pos+4] === 12523) return true; // [ハンテール]
      if(str[pos+1] === 12516 && str[pos+2] === 12471 && str[pos+3] === 12460 && str[pos+4] === 12513) return true; // [ハヤシガメ]
      pos+=1; continue;
    }
    if(str[pos] === 12481) { // [チ]
      if(str[pos+1] === 12467 && str[pos+2] === 12522 && str[pos+3] === 12540 && str[pos+4] === 12479) return true; // [チコリータ]
      if(str[pos+1] === 12519 && str[pos+2] === 12531 && str[pos+3] === 12481 && str[pos+4] === 12540) return true; // [チョンチー]
      if(str[pos+1] === 12515 && str[pos+2] === 12540 && str[pos+3] === 12524 && str[pos+4] === 12512) return true; // [チャーレム]
      if(str[pos+1] === 12523) { // [チル]
        if(str[pos+2] === 12479 && str[pos+3] === 12522 && str[pos+4] === 12473) return true; // [チルタリス]
        if(str[pos+2] === 12483 && str[pos+3] === 12488) return true; // [チルット]
        pos+=1; continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12531) return true; // [チリーン]
      if(str[pos+1] === 12455 && str[pos+2] === 12522) { // [チェリ]
        if(str[pos+3] === 12512) return true; // [チェリム]
        if(str[pos+3] === 12531 && str[pos+4] === 12508) return true; // [チェリンボ]
        pos+=2; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12507) { // [ホ]
      if(str[pos+1] === 12454 && str[pos+2] === 12458 && str[pos+3] === 12454) return true; // [ホウオウ]
      if(str[pos+1] === 12540 && str[pos+2] === 12507 && str[pos+3] === 12540) return true; // [ホーホー]
      if(str[pos+1] === 12456 && str[pos+2] === 12523) { // [ホエル]
        if(str[pos+3] === 12458 && str[pos+4] === 12540) return true; // [ホエルオー]
        if(str[pos+3] === 12467) return true; // [ホエルコ]
        pos+=2; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12520) { // [ヨ]
      if(str[pos+1] === 12523 && str[pos+2] === 12494 && str[pos+3] === 12474 && str[pos+4] === 12463) return true; // [ヨルノズク]
      if(str[pos+1] === 12540 && str[pos+2] === 12462 && str[pos+3] === 12521 && str[pos+4] === 12473) return true; // [ヨーギラス]
      if(str[pos+1] === 12510 && str[pos+2] === 12527 && str[pos+3] === 12523) return true; // [ヨマワル]
      if(str[pos+1] === 12494 && str[pos+2] === 12527 && str[pos+3] === 12540 && str[pos+4] === 12523) return true; // [ヨノワール]
      pos+=1; continue;
    }
    if(str[pos] === 12493) { // [ネ]
      if(str[pos+1] === 12452 && str[pos+2] === 12486 && str[pos+3] === 12451) { // [ネイティ]
        return true; // [ネイティ]
        if(str[pos+4] === 12458) return true; // [ネイティオ]
        pos+=4; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12489 && str[pos+3] === 12540 && str[pos+4] === 12523) return true; // [ネンドール]
      if(str[pos+1] === 12458 && str[pos+2] === 12521 && str[pos+3] === 12531 && str[pos+4] === 12488) return true; // [ネオラント]
      pos+=1; continue;
    }
    if(str[pos] === 12492) { // [ヌ]
      if(str[pos+1] === 12458 && str[pos+2] === 12540) return true; // [ヌオー]
      if(str[pos+1] === 12510 && str[pos+2] === 12463 && str[pos+3] === 12525 && str[pos+4] === 12540) return true; // [ヌマクロー]
      if(str[pos+1] === 12465 && str[pos+2] === 12491 && str[pos+3] === 12531) return true; // [ヌケニン]
      pos+=1; continue;
    }
    if(str[pos] === 12512) { // [ム]
      if(str[pos+1] === 12454 && str[pos+2] === 12510) { // [ムウマ]
        return true; // [ムウマ]
        if(str[pos+3] === 12540 && str[pos+4] === 12472) return true; // [ムウマージ]
        pos+=2; continue;
      }
      if(str[pos+1] === 12481 && str[pos+2] === 12517 && str[pos+3] === 12540 && str[pos+4] === 12523) return true; // [ムチュール]
      if(str[pos+1] === 12483 && str[pos+2] === 12463 && str[pos+3] === 12523) return true; // [ムックル]
      if(str[pos+1] === 12463) { // [ムク]
        if(str[pos+2] === 12496 && str[pos+3] === 12540 && str[pos+4] === 12489) return true; // [ムクバード]
        if(str[pos+2] === 12507 && str[pos+3] === 12540 && str[pos+4] === 12463) return true; // [ムクホーク]
        pos+=1; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12477) { // [ソ]
      if(str[pos+1] === 12523 && str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12463) return true; // [ソルロック]
      if(str[pos+1] === 12540 && str[pos+2] === 12490) { // [ソーナ]
        if(str[pos+3] === 12494) return true; // [ソーナノ]
        if(str[pos+3] === 12531 && str[pos+4] === 12473) return true; // [ソーナンス]
        pos+=2; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12494) { // [ノ]
      if(str[pos+1] === 12467 && str[pos+2] === 12483 && str[pos+3] === 12481) return true; // [ノコッチ]
      if(str[pos+1] === 12474 && str[pos+2] === 12497 && str[pos+3] === 12473) return true; // [ノズパス]
      if(str[pos+1] === 12463 && str[pos+2] === 12479 && str[pos+3] === 12473) return true; // [ノクタス]
      pos+=1; continue;
    }
    if(str[pos] === 12464) { // [グ]
      if(str[pos+1] === 12521) { // [グラ]
        if(str[pos+2] === 12452) { // [グライ]
          if(str[pos+3] === 12458 && str[pos+4] === 12531) return true; // [グライオン]
          if(str[pos+3] === 12460 && str[pos+4] === 12540) return true; // [グライガー]
          pos+=2; continue;
        }
        if(str[pos+2] === 12531 && str[pos+3] === 12502 && str[pos+4] === 12523) return true; // [グランブル]
        if(str[pos+2] === 12456 && str[pos+3] === 12490) return true; // [グラエナ]
        if(str[pos+2] === 12540 && str[pos+3] === 12489 && str[pos+4] === 12531) return true; // [グラードン]
        pos+=1; continue;
      }
      if(str[pos+1] === 12524) { // [グレ]
        if(str[pos+2] === 12452 && str[pos+3] === 12471 && str[pos+4] === 12450) return true; // [グレイシア]
        if(str[pos+2] === 12483 && str[pos+3] === 12464 && str[pos+4] === 12523) return true; // [グレッグル]
        pos+=1; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12484) { // [ツ]
      if(str[pos+1] === 12481 && str[pos+2] === 12491 && str[pos+3] === 12531) return true; // [ツチニン]
      if(str[pos+1] === 12508 && str[pos+2] === 12484 && str[pos+3] === 12508) return true; // [ツボツボ]
      pos+=1; continue;
    }
    if(str[pos] === 12504) { // [ヘ]
      if(str[pos+1] === 12521 && str[pos+2] === 12463 && str[pos+3] === 12525 && str[pos+4] === 12473) return true; // [ヘラクロス]
      if(str[pos+1] === 12523 && str[pos+2] === 12460 && str[pos+3] === 12540) return true; // [ヘルガー]
      if(str[pos+1] === 12452 && str[pos+2] === 12460 && str[pos+3] === 12491) return true; // [ヘイガニ]
      pos+=1; continue;
    }
    if(str[pos] === 12486 && str[pos+1] === 12483) { // [テッ]
      if(str[pos+2] === 12459 && str[pos+3] === 12491 && str[pos+4] === 12531) return true; // [テッカニン]
      if(str[pos+2] === 12509 && str[pos+3] === 12454 && str[pos+4] === 12458) return true; // [テッポウオ]
      pos+=2; continue;
    }
    if(str[pos] === 12475 && str[pos+1] === 12524 && str[pos+2] === 12499 && str[pos+3] === 12451) return true; // [セレビィ]
    if(str[pos] === 12508) { // [ボ]
      if(str[pos+1] === 12473 && str[pos+2] === 12468 && str[pos+3] === 12489 && str[pos+4] === 12521) return true; // [ボスゴドラ]
      if(str[pos+1] === 12540 && str[pos+2] === 12510 && str[pos+3] === 12531 && str[pos+4] === 12480) return true; // [ボーマンダ]
      pos+=1; continue;
    }
    if(str[pos] === 12470 && str[pos+1] === 12531 && str[pos+2] === 12464 && str[pos+3] === 12540 && str[pos+4] === 12473) return true; // [ザングース]
    pos+=1; continue;
  }
  return false;
};
