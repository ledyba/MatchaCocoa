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
        if(str[pos+3] === 12477 && str[pos+4] === 12454) return true;
        if(str[pos+3] === 12480 && str[pos+4] === 12493) return true;
        if(str[pos+3] === 12496 && str[pos+4] === 12490) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12487 && str[pos+3] === 12451 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12470 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12449 && str[pos+2] === 12452 && str[pos+3] === 12516 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12457 && str[pos+2] === 12524 && str[pos+3] === 12488 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12452 && str[pos+3] === 12468 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12525 && str[pos+2] === 12540 && str[pos+3] === 12476 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12527) { // [フワ]
        if(str[pos+2] === 12521 && str[pos+3] === 12452 && str[pos+4] === 12489) return true;
        if(str[pos+2] === 12531 && str[pos+3] === 12486) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12459 && str[pos+2] === 12510 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12451 && str[pos+2] === 12458 && str[pos+3] === 12493) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12498) { // [ヒ]
      if(str[pos+1] === 12488) { // [ヒト]
        if(str[pos+2] === 12459 && str[pos+3] === 12466) return true;
        if(str[pos+2] === 12487 && str[pos+3] === 12510 && str[pos+4] === 12531) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12494 && str[pos+2] === 12450 && str[pos+3] === 12521 && str[pos+4] === 12471) return true;
      if(str[pos+1] === 12510 && str[pos+2] === 12490 && str[pos+3] === 12483 && str[pos+4] === 12484) return true;
      if(str[pos+1] === 12513 && str[pos+2] === 12464 && str[pos+3] === 12510) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12496 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12467 && str[pos+2] === 12470 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12509 && str[pos+2] === 12509 && str[pos+3] === 12479 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12489 && str[pos+3] === 12521 && str[pos+4] === 12531) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12522) { // [リ]
      if(str[pos+1] === 12470 && str[pos+2] === 12540 && str[pos+3] === 12489) { // [リザード]
        return true;
        if(str[pos+4] === 12531) return true;
        pos+=3; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12464 && str[pos+3] === 12510) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12521) return true;
      if(str[pos+1] === 12540) { // [リー]
        if(str[pos+2] === 12471 && str[pos+3] === 12515 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12501 && str[pos+3] === 12451 && str[pos+4] === 12450) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12458 && str[pos+2] === 12523) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12476 && str[pos+1] === 12491 && str[pos+2] === 12460 && str[pos+3] === 12513) return true;
    if(str[pos] === 12459) { // [カ]
      if(str[pos+1] === 12452) { // [カイ]
        if(str[pos+2] === 12522) { // [カイリ]
          if(str[pos+3] === 12461 && str[pos+4] === 12540) return true;
          if(str[pos+3] === 12517 && str[pos+4] === 12540) return true;
          pos+=2; continue;
        }
        if(str[pos+2] === 12525 && str[pos+3] === 12473) return true;
        if(str[pos+2] === 12458 && str[pos+3] === 12540 && str[pos+4] === 12460) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12513) { // [カメ]
        if(str[pos+2] === 12483 && str[pos+3] === 12463 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12540 && str[pos+3] === 12523) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12514 && str[pos+2] === 12493 && str[pos+3] === 12462) return true;
      if(str[pos+1] === 12521) { // [カラ]
        if(str[pos+2] === 12459 && str[pos+3] === 12521) return true;
        if(str[pos+2] === 12469 && str[pos+3] === 12522 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12490 && str[pos+3] === 12463 && str[pos+4] === 12471) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12502 && str[pos+2] === 12488) { // [カブト]
        return true;
        if(str[pos+3] === 12503 && str[pos+4] === 12473) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12499 && str[pos+2] === 12468 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12509 && str[pos+2] === 12456 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12524 && str[pos+3] === 12458 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12466 && str[pos+2] === 12508 && str[pos+3] === 12454 && str[pos+4] === 12474) return true;
      if(str[pos+1] === 12496 && str[pos+2] === 12523 && str[pos+3] === 12489 && str[pos+4] === 12531) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12461) { // [キ]
      if(str[pos+1] === 12515) { // [キャ]
        if(str[pos+2] === 12479 && str[pos+3] === 12500 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12514 && str[pos+3] === 12513) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12517 && str[pos+2] === 12454 && str[pos+3] === 12467 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12464) { // [キング]
        if(str[pos+3] === 12489 && str[pos+4] === 12521) return true;
        if(str[pos+3] === 12521 && str[pos+4] === 12540) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12524 && str[pos+2] === 12452 && str[pos+3] === 12495 && str[pos+4] === 12490) return true;
      if(str[pos+1] === 12510 && str[pos+2] === 12527 && str[pos+3] === 12522) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12531 && str[pos+3] === 12522 && str[pos+4] === 12461) return true;
      if(str[pos+1] === 12514 && str[pos+2] === 12522) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12522 && str[pos+3] === 12450) return true;
      if(str[pos+1] === 12494) { // [キノ]
        if(str[pos+2] === 12460 && str[pos+3] === 12483 && str[pos+4] === 12469) return true;
        if(str[pos+2] === 12467 && str[pos+3] === 12467) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12496 && str[pos+2] === 12491 && str[pos+3] === 12450) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12488) { // [ト]
      if(str[pos+1] === 12469 && str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12488) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12531 && str[pos+3] === 12475 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12466) { // [トゲ]
        if(str[pos+2] === 12481 && str[pos+3] === 12483 && str[pos+4] === 12463) return true;
        if(str[pos+2] === 12500 && str[pos+3] === 12540) return true;
        if(str[pos+2] === 12461 && str[pos+3] === 12483 && str[pos+4] === 12473) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12525 && str[pos+2] === 12500 && str[pos+3] === 12454 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12489) { // [トド]
        if(str[pos+2] === 12464 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12476 && str[pos+3] === 12523 && str[pos+4] === 12460) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12522) { // [トリ]
        if(str[pos+2] === 12487 && str[pos+3] === 12503 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12488 && str[pos+3] === 12489 && str[pos+4] === 12531) return true;
        pos+=1; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12496) { // [バ]
      if(str[pos+1] === 12479 && str[pos+2] === 12501 && str[pos+3] === 12522 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12516 && str[pos+3] === 12540 && str[pos+4] === 12489) return true;
      if(str[pos+1] === 12463) { // [バク]
        if(str[pos+2] === 12458 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
        if(str[pos+2] === 12501 && str[pos+3] === 12540 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12540 && str[pos+3] === 12480) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12523) { // [バル]
        if(str[pos+2] === 12461 && str[pos+3] === 12540) return true;
        if(str[pos+2] === 12499 && str[pos+3] === 12540 && str[pos+4] === 12488) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12462 && str[pos+3] === 12521 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12471 && str[pos+2] === 12515 && str[pos+3] === 12540 && str[pos+4] === 12514) return true;
      if(str[pos+1] === 12493 && str[pos+2] === 12502 && str[pos+3] === 12540) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12499) { // [ビ]
      if(str[pos+1] === 12522 && str[pos+2] === 12522 && str[pos+3] === 12480 && str[pos+4] === 12510) return true;
      if(str[pos+1] === 12540) { // [ビー]
        if(str[pos+2] === 12480 && str[pos+3] === 12523) return true;
        if(str[pos+2] === 12489 && str[pos+3] === 12523) return true;
        if(str[pos+2] === 12463 && str[pos+3] === 12452 && str[pos+4] === 12531) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12502 && str[pos+2] === 12521 && str[pos+3] === 12540 && str[pos+4] === 12496) return true;
      if(str[pos+1] === 12483 && str[pos+2] === 12497) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12467) { // [コ]
      if(str[pos+1] === 12463 && str[pos+2] === 12540 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12483 && str[pos+3] === 12479) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12497 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12480 && str[pos+2] === 12483 && str[pos+3] === 12463) return true;
      if(str[pos+1] === 12452) { // [コイ]
        if(str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
        if(str[pos+2] === 12523) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12494 && str[pos+2] === 12495 && str[pos+3] === 12490) return true;
      if(str[pos+1] === 12467 && str[pos+2] === 12489 && str[pos+3] === 12521) return true;
      if(str[pos+1] === 12489 && str[pos+2] === 12521) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12479 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12514 && str[pos+2] === 12523 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12525) { // [コロ]
        if(str[pos+2] === 12488 && str[pos+3] === 12483 && str[pos+4] === 12463) return true;
        if(str[pos+2] === 12508 && str[pos+3] === 12540 && str[pos+4] === 12471) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12531 && str[pos+3] === 12463) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12473) { // [ス]
      if(str[pos+1] === 12500 && str[pos+2] === 12450 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12540) { // [スリー]
        if(str[pos+3] === 12497 && str[pos+4] === 12540) return true;
        if(str[pos+3] === 12503) return true;
        pos+=3; continue;
      }
      if(str[pos+1] === 12479 && str[pos+2] === 12540 && str[pos+3] === 12511 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12488 && str[pos+2] === 12521 && str[pos+3] === 12452 && str[pos+4] === 12463) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12463 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12496 && str[pos+2] === 12513) return true;
      if(str[pos+1] === 12508 && str[pos+2] === 12511 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12459) { // [スカ]
        if(str[pos+2] === 12479 && str[pos+3] === 12531 && str[pos+4] === 12463) return true;
        if(str[pos+2] === 12531 && str[pos+3] === 12503 && str[pos+4] === 12540) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12467 && str[pos+2] === 12523 && str[pos+3] === 12500) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12509) { // [ポ]
      if(str[pos+1] === 12483) { // [ポッ]
        if(str[pos+2] === 12481 && str[pos+3] === 12515 && str[pos+4] === 12510) return true;
        if(str[pos+2] === 12509) return true;
        if(str[pos+2] === 12479 && str[pos+3] === 12452 && str[pos+4] === 12471) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12491 && str[pos+2] === 12540 && str[pos+3] === 12479) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12468 && str[pos+3] === 12531) { // [ポリゴン]
        return true;
        if(str[pos+4] === 50) return true;
        if(str[pos+4] === 90) return true;
        pos+=4; continue;
      }
      if(str[pos+1] === 12509 && str[pos+2] === 12483 && str[pos+3] === 12467) return true;
      if(str[pos+1] === 12481 && str[pos+2] === 12456 && str[pos+3] === 12490) return true;
      if(str[pos+1] === 12527 && str[pos+2] === 12523 && str[pos+3] === 12531) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12500) { // [ピ]
      if(str[pos+1] === 12459 && str[pos+2] === 12481 && str[pos+3] === 12517 && str[pos+4] === 12454) return true;
      if(str[pos+1] === 12472 && str[pos+2] === 12519) { // [ピジョ]
        if(str[pos+3] === 12483 && str[pos+4] === 12488) return true;
        if(str[pos+3] === 12531) return true;
        pos+=3; continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12500) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12471 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12481 && str[pos+2] === 12517 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12451) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12503 && str[pos+3] === 12463) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12521) { // [ラ]
      if(str[pos+1] === 12452) { // [ライ]
        if(str[pos+2] === 12467 && str[pos+3] === 12454) return true;
        if(str[pos+2] === 12481 && str[pos+3] === 12517 && str[pos+4] === 12454) return true;
        if(str[pos+2] === 12508 && str[pos+3] === 12523 && str[pos+4] === 12488) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12483) { // [ラッ]
        if(str[pos+2] === 12461 && str[pos+3] === 12540) return true;
        if(str[pos+2] === 12479) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12501 && str[pos+2] === 12524 && str[pos+3] === 12471 && str[pos+4] === 12450) return true;
      if(str[pos+1] === 12503 && str[pos+2] === 12521 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12479 && str[pos+3] === 12540 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12464 && str[pos+2] === 12521 && str[pos+3] === 12540 && str[pos+4] === 12472) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12488 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12521 && str[pos+3] === 12452) return true;
      if(str[pos+1] === 12502 && str[pos+2] === 12459 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12486 && str[pos+2] === 12451) { // [ラティ]
        if(str[pos+3] === 12450 && str[pos+4] === 12473) return true;
        if(str[pos+3] === 12458 && str[pos+4] === 12473) return true;
        pos+=3; continue;
      }
      if(str[pos+1] === 12512 && str[pos+2] === 12497 && str[pos+3] === 12523 && str[pos+4] === 12489) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12458) { // [オ]
      if(str[pos+1] === 12467 && str[pos+2] === 12522 && str[pos+3] === 12470 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12491) { // [オニ]
        if(str[pos+2] === 12473 && str[pos+3] === 12474 && str[pos+4] === 12513) return true;
        if(str[pos+2] === 12489 && str[pos+3] === 12522 && str[pos+4] === 12523) return true;
        if(str[pos+2] === 12468 && str[pos+3] === 12540 && str[pos+4] === 12522) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12512) { // [オム]
        if(str[pos+2] === 12473 && str[pos+3] === 12479 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12490 && str[pos+3] === 12452 && str[pos+4] === 12488) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12480 && str[pos+3] === 12452 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12479 && str[pos+2] === 12481) return true;
      if(str[pos+1] === 12458) { // [オオ]
        if(str[pos+2] === 12473 && str[pos+3] === 12496 && str[pos+4] === 12513) return true;
        if(str[pos+2] === 12479 && str[pos+3] === 12481) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12463 && str[pos+2] === 12479 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12489 && str[pos+2] === 12471 && str[pos+3] === 12471) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12450) { // [ア]
      if(str[pos+1] === 12474 && str[pos+2] === 12510 && str[pos+3] === 12458 && str[pos+4] === 12454) return true;
      if(str[pos+1] === 12540) { // [アー]
        if(str[pos+2] === 12508) { // [アーボ]
          return true;
          if(str[pos+3] === 12483 && str[pos+4] === 12463) return true;
          pos+=2; continue;
        }
        if(str[pos+2] === 12510 && str[pos+3] === 12523 && str[pos+4] === 12489) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12522) { // [アリ]
        if(str[pos+2] === 12450 && str[pos+3] === 12489 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12466 && str[pos+3] === 12452 && str[pos+4] === 12484) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12494 && str[pos+3] === 12540 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12481 && str[pos+2] === 12515 && str[pos+3] === 12514) return true;
      if(str[pos+1] === 12466 && str[pos+2] === 12495 && str[pos+3] === 12531 && str[pos+4] === 12488) return true;
      if(str[pos+1] === 12513) { // [アメ]
        if(str[pos+2] === 12479 && str[pos+3] === 12510) return true;
        if(str[pos+2] === 12514 && str[pos+3] === 12540 && str[pos+4] === 12473) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12469 && str[pos+2] === 12490 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12494 && str[pos+2] === 12503 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12502 && str[pos+2] === 12477 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12464 && str[pos+2] === 12494 && str[pos+3] === 12512) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12475 && str[pos+3] === 12454 && str[pos+4] === 12473) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12469) { // [サ]
      if(str[pos+1] === 12527 && str[pos+2] === 12512 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12531) { // [サン]
        if(str[pos+2] === 12480 && str[pos+3] === 12540) { // [サンダー]
          return true;
          if(str[pos+4] === 12473) return true;
          pos+=4; continue;
        }
        if(str[pos+2] === 12489) { // [サンド]
          return true;
          if(str[pos+3] === 12497 && str[pos+4] === 12531) return true;
          pos+=2; continue;
        }
        pos+=2; continue;
      }
      if(str[pos+1] === 12452) { // [サイ]
        if(str[pos+2] === 12489 && str[pos+3] === 12531) return true;
        if(str[pos+2] === 12507 && str[pos+3] === 12540 && str[pos+4] === 12531) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12491 && str[pos+2] === 12540 && str[pos+3] === 12468) return true;
      if(str[pos+1] === 12490 && str[pos+2] === 12462 && str[pos+3] === 12521 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12490 && str[pos+3] === 12452 && str[pos+4] === 12488) return true;
      if(str[pos+1] === 12513 && str[pos+2] === 12495 && str[pos+3] === 12480 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12508 && str[pos+2] === 12493 && str[pos+3] === 12450) return true;
      if(str[pos+1] === 12510 && str[pos+2] === 12520 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12521 && str[pos+3] === 12499 && str[pos+4] === 12473) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12491) { // [ニ]
      if(str[pos+1] === 12489) { // [ニド]
        if(str[pos+2] === 12521 && str[pos+3] === 12531) { // [ニドラン]
          if(str[pos+4] === 9792) return true;
          if(str[pos+4] === 9794) return true;
          pos+=4; continue;
        }
        if(str[pos+2] === 12522 && str[pos+3] === 12540) { // [ニドリー]
          if(str[pos+4] === 12490) return true;
          if(str[pos+4] === 12494) return true;
          pos+=4; continue;
        }
        if(str[pos+2] === 12463 && str[pos+3] === 12452 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12515) { // [ニャ]
        if(str[pos+2] === 12523 && str[pos+3] === 12510 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12540 && str[pos+3] === 12473) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12519 && str[pos+2] === 12525) { // [ニョロ]
        if(str[pos+3] === 12478) return true;
        if(str[pos+3] === 12514) return true;
        if(str[pos+3] === 12508 && str[pos+4] === 12531) return true;
        if(str[pos+3] === 12488 && str[pos+4] === 12494) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12517 && str[pos+2] === 12540 && str[pos+3] === 12521) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12525) { // [ロ]
      if(str[pos+1] === 12467 && str[pos+2] === 12531) return true;
      if(str[pos+1] === 12476 && str[pos+2] === 12522 && str[pos+3] === 12450) return true;
      if(str[pos+1] === 12474 && str[pos+2] === 12524 && str[pos+3] === 12452 && str[pos+4] === 12489) return true;
      if(str[pos+1] === 12488 && str[pos+2] === 12512) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12503) { // [プ]
      if(str[pos+1] === 12463 && str[pos+2] === 12522 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12531) return true;
      if(str[pos+1] === 12486 && str[pos+2] === 12521) return true;
      if(str[pos+1] === 12503 && str[pos+2] === 12522 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12473 && str[pos+3] === 12523) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12474) { // [ズ]
      if(str[pos+1] === 12460 && str[pos+2] === 12452 && str[pos+3] === 12489 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12496 && str[pos+2] === 12483 && str[pos+3] === 12488) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12468) { // [ゴ]
      if(str[pos+1] === 12523) { // [ゴル]
        if(str[pos+2] === 12480 && str[pos+3] === 12483 && str[pos+4] === 12463) return true;
        if(str[pos+2] === 12496 && str[pos+3] === 12483 && str[pos+4] === 12488) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12540) { // [ゴー]
        if(str[pos+2] === 12473) { // [ゴース]
          return true;
          if(str[pos+3] === 12488) return true;
          pos+=2; continue;
        }
        if(str[pos+2] === 12522 && str[pos+3] === 12461 && str[pos+4] === 12540) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12525 && str[pos+2] === 12540) { // [ゴロー]
        if(str[pos+3] === 12491 && str[pos+4] === 12515) return true;
        if(str[pos+3] === 12531) return true;
        pos+=3; continue;
      }
      if(str[pos+1] === 12510 && str[pos+2] === 12478 && str[pos+3] === 12454) return true;
      if(str[pos+1] === 12491 && str[pos+2] === 12519 && str[pos+3] === 12491 && str[pos+4] === 12519) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12522 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12454 && str[pos+2] === 12459 && str[pos+3] === 12470 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12505) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12490) { // [ナ]
      if(str[pos+1] === 12478 && str[pos+2] === 12494 && str[pos+3] === 12463 && str[pos+4] === 12469) return true;
      if(str[pos+1] === 12483) { // [ナッ]
        if(str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12471 && str[pos+3] === 12540) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12510) { // [ナマ]
        if(str[pos+2] === 12465 && str[pos+3] === 12525) return true;
        if(str[pos+2] === 12474 && str[pos+3] === 12531) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12456 && str[pos+2] === 12488 && str[pos+3] === 12523) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12463) { // [ク]
      if(str[pos+1] === 12469 && str[pos+2] === 12452 && str[pos+3] === 12495 && str[pos+4] === 12490) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12502) return true;
      if(str[pos+1] === 12525 && str[pos+2] === 12496 && str[pos+3] === 12483 && str[pos+4] === 12488) return true;
      if(str[pos+1] === 12492 && str[pos+2] === 12462 && str[pos+3] === 12480 && str[pos+4] === 12510) return true;
      if(str[pos+1] === 12481 && str[pos+2] === 12540 && str[pos+3] === 12488) return true;
      if(str[pos+1] === 12524 && str[pos+2] === 12475 && str[pos+3] === 12522 && str[pos+4] === 12450) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12497) { // [パ]
      if(str[pos+1] === 12454 && str[pos+2] === 12527 && str[pos+3] === 12454) return true;
      if(str[pos+1] === 12521) { // [パラ]
        if(str[pos+2] === 12473) return true;
        if(str[pos+2] === 12475 && str[pos+3] === 12463 && str[pos+4] === 12488) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12523) { // [パル]
        if(str[pos+2] === 12461 && str[pos+3] === 12450) return true;
        if(str[pos+2] === 12471 && str[pos+3] === 12455 && str[pos+4] === 12531) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12481 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12523 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12481 && str[pos+2] === 12522 && str[pos+3] === 12473) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12514) { // [モ]
      if(str[pos+1] === 12523 && str[pos+2] === 12501 && str[pos+3] === 12457 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12472 && str[pos+3] === 12515 && str[pos+4] === 12521) return true;
      if(str[pos+1] === 12467 && str[pos+2] === 12467) return true;
      if(str[pos+1] === 12454 && str[pos+2] === 12459 && str[pos+3] === 12470 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12472 && str[pos+2] === 12515 && str[pos+3] === 12531 && str[pos+4] === 12508) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12487) { // [デ]
      if(str[pos+1] === 12451) { // [ディ]
        if(str[pos+2] === 12450 && str[pos+3] === 12523 && str[pos+4] === 12460) return true;
        if(str[pos+2] === 12464 && str[pos+3] === 12480) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12522 && str[pos+3] === 12517 && str[pos+4] === 12454) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12496 && str[pos+3] === 12540 && str[pos+4] === 12489) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12499 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12458 && str[pos+2] === 12461 && str[pos+3] === 12471 && str[pos+4] === 12473) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12480) { // [ダ]
      if(str[pos+1] === 12464 && str[pos+2] === 12488 && str[pos+3] === 12522 && str[pos+4] === 12458) return true;
      if(str[pos+1] === 12540) { // [ダー]
        if(str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12452) return true;
        if(str[pos+2] === 12486 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12496 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12494 && str[pos+3] === 12540 && str[pos+4] === 12474) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12506) { // [ペ]
      if(str[pos+1] === 12522 && str[pos+2] === 12483 && str[pos+3] === 12497 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12471 && str[pos+3] === 12450 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12483 && str[pos+3] === 12503) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12510) { // [マ]
      if(str[pos+1] === 12480 && str[pos+2] === 12484 && str[pos+3] === 12508 && str[pos+4] === 12511) return true;
      if(str[pos+1] === 12531) { // [マン]
        if(str[pos+2] === 12461 && str[pos+3] === 12540) return true;
        if(str[pos+2] === 12479 && str[pos+3] === 12452 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12512 && str[pos+3] === 12540) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12523) { // [マル]
        if(str[pos+2] === 12494 && str[pos+3] === 12540 && str[pos+4] === 12512) return true;
        if(str[pos+2] === 12510 && str[pos+3] === 12452 && str[pos+4] === 12531) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12479 && str[pos+2] === 12489 && str[pos+3] === 12460 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12464) { // [マグ]
        if(str[pos+2] === 12459 && str[pos+3] === 12523 && str[pos+4] === 12468) return true;
        if(str[pos+2] === 12510) { // [マグマ]
          if(str[pos+3] === 12483 && str[pos+4] === 12464) return true;
          if(str[pos+3] === 12521 && str[pos+4] === 12471) return true;
          pos+=2; continue;
        }
        pos+=1; continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12523) { // [マリル]
        return true;
        if(str[pos+3] === 12522) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12473 && str[pos+3] === 12464 && str[pos+4] === 12510) return true;
      if(str[pos+1] === 12518 && str[pos+2] === 12523 && str[pos+3] === 12489) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12494 && str[pos+3] === 12471 && str[pos+4] === 12479) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12490 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12493 && str[pos+2] === 12493) return true;
      if(str[pos+1] === 12473 && str[pos+2] === 12461 && str[pos+3] === 12483 && str[pos+4] === 12497) return true;
      if(str[pos+1] === 12491 && str[pos+2] === 12517 && str[pos+3] === 12540 && str[pos+4] === 12521) return true;
      if(str[pos+1] === 12490 && str[pos+2] === 12501 && str[pos+3] === 12451) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12460) { // [ガ]
      if(str[pos+1] === 12521 && str[pos+2] === 12460 && str[pos+3] === 12521) return true;
      if(str[pos+1] === 12540) { // [ガー]
        if(str[pos+2] === 12487 && str[pos+3] === 12451) return true;
        if(str[pos+2] === 12513 && str[pos+3] === 12452 && str[pos+4] === 12523) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12540 && str[pos+3] === 12521) return true;
      if(str[pos+1] === 12496 && str[pos+2] === 12452 && str[pos+3] === 12488) return true;
      if(str[pos+1] === 12502 && str[pos+2] === 12522 && str[pos+3] === 12450 && str[pos+4] === 12473) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12454) { // [ウ]
      if(str[pos+1] === 12452 && str[pos+2] === 12531 && str[pos+3] === 12487 && str[pos+4] === 12451) return true;
      if(str[pos+1] === 12484) { // [ウツ]
        if(str[pos+2] === 12489 && str[pos+3] === 12531) return true;
        if(str[pos+2] === 12508 && str[pos+3] === 12483 && str[pos+4] === 12488) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12477) { // [ウソ]
        if(str[pos+2] === 12483 && str[pos+3] === 12461 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12495 && str[pos+3] === 12481) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12497 && str[pos+2] === 12540) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12512 && str[pos+3] === 12540) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12465) { // [ケ]
      if(str[pos+1] === 12531 && str[pos+2] === 12479 && str[pos+3] === 12525 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12471 && str[pos+3] === 12451) return true;
      if(str[pos+1] === 12512 && str[pos+2] === 12483 && str[pos+3] === 12477) return true;
      if(str[pos+1] === 12483 && str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12467 && str[pos+3] === 12454 && str[pos+4] === 12458) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12518) { // [ユ]
      if(str[pos+1] === 12524 && str[pos+2] === 12452 && str[pos+3] === 12489 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12466 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12461) { // [ユキ]
        if(str[pos+2] === 12459 && str[pos+3] === 12502 && str[pos+4] === 12522) return true;
        if(str[pos+2] === 12527 && str[pos+3] === 12521 && str[pos+4] === 12471) return true;
        if(str[pos+2] === 12494 && str[pos+3] === 12458 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12513 && str[pos+3] === 12494 && str[pos+4] === 12467) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12463 && str[pos+2] === 12471 && str[pos+3] === 12540) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12527) { // [ワ]
      if(str[pos+1] === 12491 && str[pos+2] === 12494 && str[pos+3] === 12467) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12522 && str[pos+3] === 12461 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12479 && str[pos+2] === 12483 && str[pos+3] === 12467) return true;
      if(str[pos+1] === 12459 && str[pos+2] === 12471 && str[pos+3] === 12515 && str[pos+4] === 12514) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12513) { // [メ]
      if(str[pos+1] === 12479) { // [メタ]
        if(str[pos+2] === 12514 && str[pos+3] === 12531) return true;
        if(str[pos+2] === 12531 && str[pos+3] === 12464) return true;
        if(str[pos+2] === 12464 && str[pos+3] === 12525 && str[pos+4] === 12473) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12494 && str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12466) return true;
      if(str[pos+1] === 12460) { // [メガ]
        if(str[pos+2] === 12491 && str[pos+3] === 12454 && str[pos+4] === 12512) return true;
        if(str[pos+2] === 12516 && str[pos+3] === 12531 && str[pos+4] === 12510) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12503) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12489) { // [ド]
      if(str[pos+1] === 12463) { // [ドク]
        if(str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12466) return true;
        if(str[pos+2] === 12465 && str[pos+3] === 12452 && str[pos+4] === 12523) return true;
        if(str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12464) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12540) { // [ドー]
        if(str[pos+2] === 12489) { // [ドード]
          if(str[pos+3] === 12522 && str[pos+4] === 12458) return true;
          if(str[pos+3] === 12540) return true;
          pos+=2; continue;
        }
        if(str[pos+2] === 12502 && str[pos+3] === 12523) return true;
        if(str[pos+2] === 12511 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12479 && str[pos+3] === 12463 && str[pos+4] === 12531) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12460 && str[pos+2] === 12540 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12531) { // [ドン]
        if(str[pos+2] === 12501 && str[pos+3] === 12449 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12513 && str[pos+3] === 12523) return true;
        if(str[pos+2] === 12459 && str[pos+3] === 12521 && str[pos+4] === 12473) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12468 && str[pos+2] === 12540 && str[pos+3] === 12512) return true;
      if(str[pos+1] === 12472 && str[pos+2] === 12519 && str[pos+3] === 12483 && str[pos+4] === 12481) return true;
      if(str[pos+1] === 12479 && str[pos+2] === 12452 && str[pos+3] === 12488 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12500 && str[pos+3] === 12458 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12469 && str[pos+2] === 12452 && str[pos+3] === 12489 && str[pos+4] === 12531) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12452) { // [イ]
      if(str[pos+1] === 12471 && str[pos+2] === 12484 && str[pos+3] === 12502 && str[pos+4] === 12486) return true;
      if(str[pos+1] === 12527 && str[pos+2] === 12540 && str[pos+3] === 12463) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12502 && str[pos+3] === 12452) return true;
      if(str[pos+1] === 12488 && str[pos+2] === 12510 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12494 && str[pos+2] === 12512 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12511 && str[pos+3] === 12540 && str[pos+4] === 12476) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12462) { // [ギ]
      if(str[pos+1] === 12515) { // [ギャ]
        if(str[pos+2] === 12521 && str[pos+3] === 12489 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12503) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12521 && str[pos+2] === 12486 && str[pos+3] === 12451 && str[pos+4] === 12490) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12516) { // [ヤ]
      if(str[pos+1] === 12489) { // [ヤド]
        if(str[pos+2] === 12521 && str[pos+3] === 12531) return true;
        if(str[pos+2] === 12531) return true;
        if(str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12516 && str[pos+3] === 12531 && str[pos+4] === 12510) return true;
      if(str[pos+1] === 12511) { // [ヤミ]
        if(str[pos+2] === 12459 && str[pos+3] === 12521 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12521 && str[pos+3] === 12511) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12461 && str[pos+3] === 12514 && str[pos+4] === 12494) return true;
      if(str[pos+1] === 12472 && str[pos+2] === 12525 && str[pos+3] === 12531) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12524) { // [レ]
      if(str[pos+1] === 12450 && str[pos+2] === 12467 && str[pos+3] === 12452 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12487 && str[pos+2] === 12451) { // [レディ]
        if(str[pos+3] === 12450 && str[pos+4] === 12531) return true;
        if(str[pos+3] === 12496) return true;
        pos+=3; continue;
      }
      if(str[pos+1] === 12472) { // [レジ]
        if(str[pos+2] === 12450 && str[pos+3] === 12452 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12463) return true;
        if(str[pos+2] === 12473 && str[pos+3] === 12481 && str[pos+4] === 12523) return true;
        if(str[pos+2] === 12462 && str[pos+3] === 12460 && str[pos+4] === 12473) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12463 && str[pos+3] === 12454 && str[pos+4] === 12470) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12488 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12472) { // [ジ]
      if(str[pos+1] === 12464 && str[pos+2] === 12470 && str[pos+3] === 12464 && str[pos+4] === 12510) return true;
      if(str[pos+1] === 12517) { // [ジュ]
        if(str[pos+2] === 12468 && str[pos+3] === 12531) return true;
        if(str[pos+2] === 12503 && str[pos+3] === 12488 && str[pos+4] === 12523) return true;
        if(str[pos+2] === 12459 && str[pos+3] === 12452 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12506 && str[pos+3] === 12483 && str[pos+4] === 12479) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12521 && str[pos+3] === 12531 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12540 && str[pos+3] === 12481) return true;
      if(str[pos+1] === 12496 && str[pos+2] === 12467 && str[pos+3] === 12452 && str[pos+4] === 12523) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12505) { // [ベ]
      if(str[pos+1] === 12488 && str[pos+2] === 12505) { // [ベトベ]
        if(str[pos+3] === 12479 && str[pos+4] === 12540) return true;
        if(str[pos+3] === 12488 && str[pos+4] === 12531) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12525) { // [ベロ]
        if(str[pos+2] === 12505 && str[pos+3] === 12523 && str[pos+4] === 12488) return true;
        if(str[pos+2] === 12522 && str[pos+3] === 12531 && str[pos+4] === 12460) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12452 && str[pos+2] === 12522 && str[pos+3] === 12540 && str[pos+4] === 12501) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12471) { // [シ]
      if(str[pos+1] === 12455) { // [シェ]
        if(str[pos+2] === 12452 && str[pos+3] === 12511) return true;
        if(str[pos+2] === 12523 && str[pos+3] === 12480 && str[pos+4] === 12540) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12489 && str[pos+3] === 12521) return true;
      if(str[pos+1] === 12515 && str[pos+2] === 12527 && str[pos+3] === 12540 && str[pos+4] === 12474) return true;
      if(str[pos+1] === 12470 && str[pos+2] === 12522 && str[pos+3] === 12460 && str[pos+4] === 12540) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12466 && str[pos+1] === 12531 && str[pos+2] === 12460 && str[pos+3] === 12540) return true;
    if(str[pos] === 12479) { // [タ]
      if(str[pos+1] === 12483 && str[pos+2] === 12484 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12510) { // [タマ]
        if(str[pos+2] === 12470 && str[pos+3] === 12521 && str[pos+4] === 12471) return true;
        if(str[pos+2] === 12479 && str[pos+3] === 12510) return true;
        if(str[pos+2] === 12531 && str[pos+3] === 12479) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12493 && str[pos+2] === 12508 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12484 && str[pos+2] === 12505 && str[pos+3] === 12452) return true;
      if(str[pos+1] === 12486 && str[pos+2] === 12488 && str[pos+3] === 12503 && str[pos+4] === 12473) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12456) { // [エ]
      if(str[pos+1] === 12499 && str[pos+2] === 12527 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12524) { // [エレ]
        if(str[pos+2] === 12461) { // [エレキ]
          if(str[pos+3] === 12483 && str[pos+4] === 12489) return true;
          if(str[pos+3] === 12502 && str[pos+4] === 12523) return true;
          pos+=2; continue;
        }
        if(str[pos+2] === 12502 && str[pos+3] === 12540) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12452 && str[pos+2] === 12497 && str[pos+3] === 12512) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12501 && str[pos+3] === 12451) return true;
      if(str[pos+1] === 12450 && str[pos+2] === 12540 && str[pos+3] === 12512 && str[pos+4] === 12489) return true;
      if(str[pos+1] === 12531) { // [エン]
        if(str[pos+2] === 12486 && str[pos+3] === 12452) return true;
        if(str[pos+2] === 12506 && str[pos+3] === 12523 && str[pos+4] === 12488) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12493 && str[pos+2] === 12467) { // [エネコ]
        return true;
        if(str[pos+3] === 12525 && str[pos+4] === 12525) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12486 && str[pos+2] === 12508 && str[pos+3] === 12540 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12524 && str[pos+3] === 12452 && str[pos+4] === 12489) return true;
      if(str[pos+1] === 12512 && str[pos+2] === 12522 && str[pos+3] === 12483 && str[pos+4] === 12488) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12523) { // [ル]
      if(str[pos+1] === 12462 && str[pos+2] === 12450) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12472 && str[pos+3] === 12517 && str[pos+4] === 12521) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12497 && str[pos+3] === 12483 && str[pos+4] === 12497) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12522) return true;
      if(str[pos+1] === 12490 && str[pos+2] === 12488 && str[pos+3] === 12540 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12471 && str[pos+3] === 12458) return true;
      if(str[pos+1] === 12459 && str[pos+2] === 12522 && str[pos+3] === 12458) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12502) { // [ブ]
      if(str[pos+1] === 12521 && str[pos+2] === 12483 && str[pos+3] === 12461 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12540) { // [ブー]
        if(str[pos+2] === 12473 && str[pos+3] === 12479 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12496 && str[pos+3] === 12540) { // [ブーバー]
          return true;
          if(str[pos+4] === 12531) return true;
          pos+=4; continue;
        }
        if(str[pos+2] === 12500 && str[pos+3] === 12483 && str[pos+4] === 12464) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12540) return true;
      if(str[pos+1] === 12499 && str[pos+2] === 12451) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12476 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12491 && str[pos+2] === 12515 && str[pos+3] === 12483 && str[pos+4] === 12488) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12511) { // [ミ]
      if(str[pos+1] === 12491 && str[pos+2] === 12522 && str[pos+3] === 12517 && str[pos+4] === 12454) return true;
      if(str[pos+1] === 12517 && str[pos+2] === 12454) { // [ミュウ]
        return true;
        if(str[pos+3] === 12484 && str[pos+4] === 12540) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12479 && str[pos+3] === 12531 && str[pos+4] === 12463) return true;
      if(str[pos+1] === 12474 && str[pos+2] === 12468 && str[pos+3] === 12525 && str[pos+4] === 12454) return true;
      if(str[pos+1] === 12525 && str[pos+2] === 12459 && str[pos+3] === 12525 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12494) { // [ミノ]
        if(str[pos+2] === 12510 && str[pos+3] === 12480 && str[pos+4] === 12512) return true;
        if(str[pos+2] === 12512 && str[pos+3] === 12483 && str[pos+4] === 12481) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12484 && str[pos+2] === 12495 && str[pos+3] === 12491 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12511 && str[pos+2] === 12525) { // [ミミロ]
        if(str[pos+3] === 12483 && str[pos+4] === 12503) return true;
        if(str[pos+3] === 12523) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12459 && str[pos+2] === 12523 && str[pos+3] === 12466) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12495) { // [ハ]
      if(str[pos+1] === 12463 && str[pos+2] === 12522 && str[pos+3] === 12517 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12493 && str[pos+2] === 12483 && str[pos+3] === 12467) return true;
      if(str[pos+1] === 12460 && str[pos+2] === 12493 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12522) { // [ハリ]
        if(str[pos+2] === 12486 && str[pos+3] === 12516 && str[pos+4] === 12510) return true;
        if(str[pos+2] === 12540 && str[pos+3] === 12475 && str[pos+4] === 12531) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12469 && str[pos+3] === 12512) return true;
      if(str[pos+1] === 12500 && str[pos+2] === 12490 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12473) { // [ハス]
        if(str[pos+2] === 12502 && str[pos+3] === 12524 && str[pos+4] === 12525) return true;
        if(str[pos+2] === 12508 && str[pos+3] === 12540) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12502 && str[pos+2] === 12493 && str[pos+3] === 12540 && str[pos+4] === 12463) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12486 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12516 && str[pos+2] === 12471 && str[pos+3] === 12460 && str[pos+4] === 12513) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12481) { // [チ]
      if(str[pos+1] === 12467 && str[pos+2] === 12522 && str[pos+3] === 12540 && str[pos+4] === 12479) return true;
      if(str[pos+1] === 12519 && str[pos+2] === 12531 && str[pos+3] === 12481 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12515 && str[pos+2] === 12540 && str[pos+3] === 12524 && str[pos+4] === 12512) return true;
      if(str[pos+1] === 12523) { // [チル]
        if(str[pos+2] === 12479 && str[pos+3] === 12522 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12483 && str[pos+3] === 12488) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12455 && str[pos+2] === 12522) { // [チェリ]
        if(str[pos+3] === 12512) return true;
        if(str[pos+3] === 12531 && str[pos+4] === 12508) return true;
        pos+=2; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12507) { // [ホ]
      if(str[pos+1] === 12454 && str[pos+2] === 12458 && str[pos+3] === 12454) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12507 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12456 && str[pos+2] === 12523) { // [ホエル]
        if(str[pos+3] === 12458 && str[pos+4] === 12540) return true;
        if(str[pos+3] === 12467) return true;
        pos+=2; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12520) { // [ヨ]
      if(str[pos+1] === 12523 && str[pos+2] === 12494 && str[pos+3] === 12474 && str[pos+4] === 12463) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12462 && str[pos+3] === 12521 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12510 && str[pos+2] === 12527 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12494 && str[pos+2] === 12527 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12493) { // [ネ]
      if(str[pos+1] === 12452 && str[pos+2] === 12486 && str[pos+3] === 12451) { // [ネイティ]
        return true;
        if(str[pos+4] === 12458) return true;
        pos+=4; continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12489 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12458 && str[pos+2] === 12521 && str[pos+3] === 12531 && str[pos+4] === 12488) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12492) { // [ヌ]
      if(str[pos+1] === 12458 && str[pos+2] === 12540) return true;
      if(str[pos+1] === 12510 && str[pos+2] === 12463 && str[pos+3] === 12525 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12465 && str[pos+2] === 12491 && str[pos+3] === 12531) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12512) { // [ム]
      if(str[pos+1] === 12454 && str[pos+2] === 12510) { // [ムウマ]
        return true;
        if(str[pos+3] === 12540 && str[pos+4] === 12472) return true;
        pos+=2; continue;
      }
      if(str[pos+1] === 12481 && str[pos+2] === 12517 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12483 && str[pos+2] === 12463 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12463) { // [ムク]
        if(str[pos+2] === 12496 && str[pos+3] === 12540 && str[pos+4] === 12489) return true;
        if(str[pos+2] === 12507 && str[pos+3] === 12540 && str[pos+4] === 12463) return true;
        pos+=1; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12477) { // [ソ]
      if(str[pos+1] === 12523 && str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12463) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12490) { // [ソーナ]
        if(str[pos+3] === 12494) return true;
        if(str[pos+3] === 12531 && str[pos+4] === 12473) return true;
        pos+=2; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12494) { // [ノ]
      if(str[pos+1] === 12467 && str[pos+2] === 12483 && str[pos+3] === 12481) return true;
      if(str[pos+1] === 12474 && str[pos+2] === 12497 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12479 && str[pos+3] === 12473) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12464) { // [グ]
      if(str[pos+1] === 12521) { // [グラ]
        if(str[pos+2] === 12452) { // [グライ]
          if(str[pos+3] === 12458 && str[pos+4] === 12531) return true;
          if(str[pos+3] === 12460 && str[pos+4] === 12540) return true;
          pos+=2; continue;
        }
        if(str[pos+2] === 12531 && str[pos+3] === 12502 && str[pos+4] === 12523) return true;
        if(str[pos+2] === 12456 && str[pos+3] === 12490) return true;
        if(str[pos+2] === 12540 && str[pos+3] === 12489 && str[pos+4] === 12531) return true;
        pos+=1; continue;
      }
      if(str[pos+1] === 12524) { // [グレ]
        if(str[pos+2] === 12452 && str[pos+3] === 12471 && str[pos+4] === 12450) return true;
        if(str[pos+2] === 12483 && str[pos+3] === 12464 && str[pos+4] === 12523) return true;
        pos+=1; continue;
      }
      pos+=1; continue;
    }
    if(str[pos] === 12484) { // [ツ]
      if(str[pos+1] === 12481 && str[pos+2] === 12491 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12508 && str[pos+2] === 12484 && str[pos+3] === 12508) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12504) { // [ヘ]
      if(str[pos+1] === 12521 && str[pos+2] === 12463 && str[pos+3] === 12525 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12460 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12460 && str[pos+3] === 12491) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12486 && str[pos+1] === 12483) { // [テッ]
      if(str[pos+2] === 12459 && str[pos+3] === 12491 && str[pos+4] === 12531) return true;
      if(str[pos+2] === 12509 && str[pos+3] === 12454 && str[pos+4] === 12458) return true;
      pos+=2; continue;
    }
    if(str[pos] === 12475 && str[pos+1] === 12524 && str[pos+2] === 12499 && str[pos+3] === 12451) return true;
    if(str[pos] === 12508) { // [ボ]
      if(str[pos+1] === 12473 && str[pos+2] === 12468 && str[pos+3] === 12489 && str[pos+4] === 12521) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12510 && str[pos+3] === 12531 && str[pos+4] === 12480) return true;
      pos+=1; continue;
    }
    if(str[pos] === 12470 && str[pos+1] === 12531 && str[pos+2] === 12464 && str[pos+3] === 12540 && str[pos+4] === 12473) return true;
    pos+=1; continue;
  }
  return false;
};
