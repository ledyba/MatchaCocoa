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
    case 0:
      if(str[cur] === 12501) {
        state = 1;
        cur += 1;
        continue;
      }
      if(str[cur] === 12498) {
        state = 4;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522) {
        state = 6;
        cur += 1;
        continue;
      }
      if(str[cur] === 12476 && str[cur+1] === 12491 && str[cur+2] === 12460 && str[cur+3] === 12513) return true;
      if(str[cur] === 12459) {
        state = 9;
        cur += 1;
        continue;
      }
      if(str[cur] === 12461) {
        state = 15;
        cur += 1;
        continue;
      }
      if(str[cur] === 12488) {
        state = 19;
        cur += 1;
        continue;
      }
      if(str[cur] === 12496) {
        state = 23;
        cur += 1;
        continue;
      }
      if(str[cur] === 12499) {
        state = 26;
        cur += 1;
        continue;
      }
      if(str[cur] === 12467) {
        state = 28;
        cur += 1;
        continue;
      }
      if(str[cur] === 12473) {
        state = 31;
        cur += 1;
        continue;
      }
      if(str[cur] === 12509) {
        state = 34;
        cur += 1;
        continue;
      }
      if(str[cur] === 12500) {
        state = 37;
        cur += 1;
        continue;
      }
      if(str[cur] === 12521) {
        state = 39;
        cur += 1;
        continue;
      }
      if(str[cur] === 12458) {
        state = 43;
        cur += 1;
        continue;
      }
      if(str[cur] === 12450) {
        state = 47;
        cur += 1;
        continue;
      }
      if(str[cur] === 12469) {
        state = 52;
        cur += 1;
        continue;
      }
      if(str[cur] === 12491) {
        state = 57;
        cur += 1;
        continue;
      }
      if(str[cur] === 12525) {
        state = 63;
        cur += 1;
        continue;
      }
      if(str[cur] === 12503) {
        state = 64;
        cur += 1;
        continue;
      }
      if(str[cur] === 12474) {
        state = 65;
        cur += 1;
        continue;
      }
      if(str[cur] === 12468) {
        state = 66;
        cur += 1;
        continue;
      }
      if(str[cur] === 12490) {
        state = 71;
        cur += 1;
        continue;
      }
      if(str[cur] === 12463) {
        state = 74;
        cur += 1;
        continue;
      }
      if(str[cur] === 12497) {
        state = 75;
        cur += 1;
        continue;
      }
      if(str[cur] === 12514) {
        state = 78;
        cur += 1;
        continue;
      }
      if(str[cur] === 12487) {
        state = 79;
        cur += 1;
        continue;
      }
      if(str[cur] === 12480) {
        state = 81;
        cur += 1;
        continue;
      }
      if(str[cur] === 12506) {
        state = 83;
        cur += 1;
        continue;
      }
      if(str[cur] === 12510) {
        state = 84;
        cur += 1;
        continue;
      }
      if(str[cur] === 12460) {
        state = 90;
        cur += 1;
        continue;
      }
      if(str[cur] === 12454) {
        state = 92;
        cur += 1;
        continue;
      }
      if(str[cur] === 12465) {
        state = 95;
        cur += 1;
        continue;
      }
      if(str[cur] === 12518) {
        state = 96;
        cur += 1;
        continue;
      }
      if(str[cur] === 12527) {
        state = 98;
        cur += 1;
        continue;
      }
      if(str[cur] === 12513) {
        state = 99;
        cur += 1;
        continue;
      }
      if(str[cur] === 12489) {
        state = 102;
        cur += 1;
        continue;
      }
      if(str[cur] === 12452) {
        state = 107;
        cur += 1;
        continue;
      }
      if(str[cur] === 12462) {
        state = 108;
        cur += 1;
        continue;
      }
      if(str[cur] === 12516) {
        state = 110;
        cur += 1;
        continue;
      }
      if(str[cur] === 12524) {
        state = 113;
        cur += 1;
        continue;
      }
      if(str[cur] === 12472) {
        state = 116;
        cur += 1;
        continue;
      }
      if(str[cur] === 12505) {
        state = 118;
        cur += 1;
        continue;
      }
      if(str[cur] === 12471) {
        state = 121;
        cur += 1;
        continue;
      }
      if(str[cur] === 12466 && str[cur+1] === 12531 && str[cur+2] === 12460 && str[cur+3] === 12540) return true;
      if(str[cur] === 12479) {
        state = 123;
        cur += 1;
        continue;
      }
      if(str[cur] === 12456) {
        state = 125;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523) {
        state = 130;
        cur += 1;
        continue;
      }
      if(str[cur] === 12502) {
        state = 131;
        cur += 1;
        continue;
      }
      if(str[cur] === 12511) {
        state = 134;
        cur += 1;
        continue;
      }
      if(str[cur] === 12495) {
        state = 138;
        cur += 1;
        continue;
      }
      if(str[cur] === 12481) {
        state = 141;
        cur += 1;
        continue;
      }
      if(str[cur] === 12507) {
        state = 144;
        cur += 1;
        continue;
      }
      if(str[cur] === 12520) {
        state = 146;
        cur += 1;
        continue;
      }
      if(str[cur] === 12493) {
        state = 147;
        cur += 1;
        continue;
      }
      if(str[cur] === 12492) {
        state = 149;
        cur += 1;
        continue;
      }
      if(str[cur] === 12512) {
        state = 150;
        cur += 1;
        continue;
      }
      if(str[cur] === 12477) {
        state = 153;
        cur += 1;
        continue;
      }
      if(str[cur] === 12494) {
        state = 155;
        cur += 1;
        continue;
      }
      if(str[cur] === 12464) {
        state = 156;
        cur += 1;
        continue;
      }
      if(str[cur] === 12484) {
        state = 160;
        cur += 1;
        continue;
      }
      if(str[cur] === 12504) {
        state = 161;
        cur += 1;
        continue;
      }
      if(str[cur] === 12486 && str[cur+1] === 12483) {
        state = 162;
        cur += 2;
        continue;
      }
      if(str[cur] === 12475 && str[cur+1] === 12524 && str[cur+2] === 12499 && str[cur+3] === 12451) return true;
      if(str[cur] === 12508) {
        state = 163;
        cur += 1;
        continue;
      }
      if(str[cur] === 12470 && str[cur+1] === 12531 && str[cur+2] === 12464 && str[cur+3] === 12540 && str[cur+4] === 12473) return true;
      pos++; cur = pos; continue;
    case 1:
      if(str[cur] === 12471 && str[cur+1] === 12462) {
        state = 2;
        cur += 2;
        continue;
      }
      if(str[cur] === 12540 && str[cur+1] === 12487 && str[cur+2] === 12451 && str[cur+3] === 12531) return true;
      if(str[cur] === 12522 && str[cur+1] === 12540 && str[cur+2] === 12470 && str[cur+3] === 12540) return true;
      if(str[cur] === 12449 && str[cur+1] === 12452 && str[cur+2] === 12516 && str[cur+3] === 12540) return true;
      if(str[cur] === 12457 && str[cur+1] === 12524 && str[cur+2] === 12488 && str[cur+3] === 12473) return true;
      if(str[cur] === 12521 && str[cur+1] === 12452 && str[cur+2] === 12468 && str[cur+3] === 12531) return true;
      if(str[cur] === 12525 && str[cur+1] === 12540 && str[cur+2] === 12476 && str[cur+3] === 12523) return true;
      if(str[cur] === 12527) {
        state = 3;
        cur += 1;
        continue;
      }
      if(str[cur] === 12459 && str[cur+1] === 12510 && str[cur+2] === 12523) return true;
      if(str[cur] === 12451 && str[cur+1] === 12458 && str[cur+2] === 12493) return true;
      pos++; cur = pos; continue;
    case 2:
      if(str[cur] === 12477 && str[cur+1] === 12454) return true;
      if(str[cur] === 12480 && str[cur+1] === 12493) return true;
      if(str[cur] === 12496 && str[cur+1] === 12490) return true;
      pos++; cur = pos; continue;
    case 3:
      if(str[cur] === 12521 && str[cur+1] === 12452 && str[cur+2] === 12489) return true;
      if(str[cur] === 12531 && str[cur+1] === 12486) return true;
      pos++; cur = pos; continue;
    case 4:
      if(str[cur] === 12488) {
        state = 5;
        cur += 1;
        continue;
      }
      if(str[cur] === 12494 && str[cur+1] === 12450 && str[cur+2] === 12521 && str[cur+3] === 12471) return true;
      if(str[cur] === 12510 && str[cur+1] === 12490 && str[cur+2] === 12483 && str[cur+3] === 12484) return true;
      if(str[cur] === 12513 && str[cur+1] === 12464 && str[cur+2] === 12510) return true;
      if(str[cur] === 12531 && str[cur+1] === 12496 && str[cur+2] === 12473) return true;
      if(str[cur] === 12467 && str[cur+1] === 12470 && str[cur+2] === 12523) return true;
      if(str[cur] === 12509 && str[cur+1] === 12509 && str[cur+2] === 12479 && str[cur+3] === 12473) return true;
      if(str[cur] === 12540 && str[cur+1] === 12489 && str[cur+2] === 12521 && str[cur+3] === 12531) return true;
      pos++; cur = pos; continue;
    case 5:
      if(str[cur] === 12459 && str[cur+1] === 12466) return true;
      if(str[cur] === 12487 && str[cur+1] === 12510 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 6:
      if(str[cur] === 12470 && str[cur+1] === 12540 && str[cur+2] === 12489) {
        state = 7;
        cur += 3;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12464 && str[cur+2] === 12510) return true;
      if(str[cur] === 12522 && str[cur+1] === 12540 && str[cur+2] === 12521) return true;
      if(str[cur] === 12540) {
        state = 8;
        cur += 1;
        continue;
      }
      if(str[cur] === 12458 && str[cur+1] === 12523) return true;
      pos++; cur = pos; continue;
    case 7:
      return true;
      if(str[cur] === 12531) return true;
      pos++; cur = pos; continue;
    case 8:
      if(str[cur] === 12471 && str[cur+1] === 12515 && str[cur+2] === 12531) return true;
      if(str[cur] === 12501 && str[cur+1] === 12451 && str[cur+2] === 12450) return true;
      pos++; cur = pos; continue;
    case 9:
      if(str[cur] === 12452) {
        state = 10;
        cur += 1;
        continue;
      }
      if(str[cur] === 12513) {
        state = 12;
        cur += 1;
        continue;
      }
      if(str[cur] === 12514 && str[cur+1] === 12493 && str[cur+2] === 12462) return true;
      if(str[cur] === 12521) {
        state = 13;
        cur += 1;
        continue;
      }
      if(str[cur] === 12502 && str[cur+1] === 12488) {
        state = 14;
        cur += 2;
        continue;
      }
      if(str[cur] === 12499 && str[cur+1] === 12468 && str[cur+2] === 12531) return true;
      if(str[cur] === 12509 && str[cur+1] === 12456 && str[cur+2] === 12521 && str[cur+3] === 12540) return true;
      if(str[cur] === 12463 && str[cur+1] === 12524 && str[cur+2] === 12458 && str[cur+3] === 12531) return true;
      if(str[cur] === 12466 && str[cur+1] === 12508 && str[cur+2] === 12454 && str[cur+3] === 12474) return true;
      if(str[cur] === 12496 && str[cur+1] === 12523 && str[cur+2] === 12489 && str[cur+3] === 12531) return true;
      pos++; cur = pos; continue;
    case 10:
      if(str[cur] === 12522) {
        state = 11;
        cur += 1;
        continue;
      }
      if(str[cur] === 12525 && str[cur+1] === 12473) return true;
      if(str[cur] === 12458 && str[cur+1] === 12540 && str[cur+2] === 12460) return true;
      pos++; cur = pos; continue;
    case 11:
      if(str[cur] === 12461 && str[cur+1] === 12540) return true;
      if(str[cur] === 12517 && str[cur+1] === 12540) return true;
      pos++; cur = pos; continue;
    case 12:
      if(str[cur] === 12483 && str[cur+1] === 12463 && str[cur+2] === 12473) return true;
      if(str[cur] === 12540 && str[cur+1] === 12523) return true;
      pos++; cur = pos; continue;
    case 13:
      if(str[cur] === 12459 && str[cur+1] === 12521) return true;
      if(str[cur] === 12469 && str[cur+1] === 12522 && str[cur+2] === 12473) return true;
      if(str[cur] === 12490 && str[cur+1] === 12463 && str[cur+2] === 12471) return true;
      pos++; cur = pos; continue;
    case 14:
      return true;
      if(str[cur] === 12503 && str[cur+1] === 12473) return true;
      pos++; cur = pos; continue;
    case 15:
      if(str[cur] === 12515) {
        state = 16;
        cur += 1;
        continue;
      }
      if(str[cur] === 12517 && str[cur+1] === 12454 && str[cur+2] === 12467 && str[cur+3] === 12531) return true;
      if(str[cur] === 12531 && str[cur+1] === 12464) {
        state = 17;
        cur += 2;
        continue;
      }
      if(str[cur] === 12524 && str[cur+1] === 12452 && str[cur+2] === 12495 && str[cur+3] === 12490) return true;
      if(str[cur] === 12510 && str[cur+1] === 12527 && str[cur+2] === 12522) return true;
      if(str[cur] === 12522 && str[cur+1] === 12531 && str[cur+2] === 12522 && str[cur+3] === 12461) return true;
      if(str[cur] === 12514 && str[cur+1] === 12522) return true;
      if(str[cur] === 12523 && str[cur+1] === 12522 && str[cur+2] === 12450) return true;
      if(str[cur] === 12494) {
        state = 18;
        cur += 1;
        continue;
      }
      if(str[cur] === 12496 && str[cur+1] === 12491 && str[cur+2] === 12450) return true;
      pos++; cur = pos; continue;
    case 16:
      if(str[cur] === 12479 && str[cur+1] === 12500 && str[cur+2] === 12540) return true;
      if(str[cur] === 12514 && str[cur+1] === 12513) return true;
      pos++; cur = pos; continue;
    case 17:
      if(str[cur] === 12489 && str[cur+1] === 12521) return true;
      if(str[cur] === 12521 && str[cur+1] === 12540) return true;
      pos++; cur = pos; continue;
    case 18:
      if(str[cur] === 12460 && str[cur+1] === 12483 && str[cur+2] === 12469) return true;
      if(str[cur] === 12467 && str[cur+1] === 12467) return true;
      pos++; cur = pos; continue;
    case 19:
      if(str[cur] === 12469 && str[cur+1] === 12461 && str[cur+2] === 12531 && str[cur+3] === 12488) return true;
      if(str[cur] === 12521 && str[cur+1] === 12531 && str[cur+2] === 12475 && str[cur+3] === 12523) return true;
      if(str[cur] === 12466) {
        state = 20;
        cur += 1;
        continue;
      }
      if(str[cur] === 12525 && str[cur+1] === 12500 && str[cur+2] === 12454 && str[cur+3] === 12473) return true;
      if(str[cur] === 12489) {
        state = 21;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522) {
        state = 22;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 20:
      if(str[cur] === 12481 && str[cur+1] === 12483 && str[cur+2] === 12463) return true;
      if(str[cur] === 12500 && str[cur+1] === 12540) return true;
      if(str[cur] === 12461 && str[cur+1] === 12483 && str[cur+2] === 12473) return true;
      pos++; cur = pos; continue;
    case 21:
      if(str[cur] === 12464 && str[cur+1] === 12521 && str[cur+2] === 12540) return true;
      if(str[cur] === 12476 && str[cur+1] === 12523 && str[cur+2] === 12460) return true;
      pos++; cur = pos; continue;
    case 22:
      if(str[cur] === 12487 && str[cur+1] === 12503 && str[cur+2] === 12473) return true;
      if(str[cur] === 12488 && str[cur+1] === 12489 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 23:
      if(str[cur] === 12479 && str[cur+1] === 12501 && str[cur+2] === 12522 && str[cur+3] === 12540) return true;
      if(str[cur] === 12522 && str[cur+1] === 12516 && str[cur+2] === 12540 && str[cur+3] === 12489) return true;
      if(str[cur] === 12463) {
        state = 24;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523) {
        state = 25;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12462 && str[cur+2] === 12521 && str[cur+3] === 12473) return true;
      if(str[cur] === 12471 && str[cur+1] === 12515 && str[cur+2] === 12540 && str[cur+3] === 12514) return true;
      if(str[cur] === 12493 && str[cur+1] === 12502 && str[cur+2] === 12540) return true;
      pos++; cur = pos; continue;
    case 24:
      if(str[cur] === 12458 && str[cur+1] === 12531 && str[cur+2] === 12464) return true;
      if(str[cur] === 12501 && str[cur+1] === 12540 && str[cur+2] === 12531) return true;
      if(str[cur] === 12540 && str[cur+1] === 12480) return true;
      pos++; cur = pos; continue;
    case 25:
      if(str[cur] === 12461 && str[cur+1] === 12540) return true;
      if(str[cur] === 12499 && str[cur+1] === 12540 && str[cur+2] === 12488) return true;
      pos++; cur = pos; continue;
    case 26:
      if(str[cur] === 12522 && str[cur+1] === 12522 && str[cur+2] === 12480 && str[cur+3] === 12510) return true;
      if(str[cur] === 12540) {
        state = 27;
        cur += 1;
        continue;
      }
      if(str[cur] === 12502 && str[cur+1] === 12521 && str[cur+2] === 12540 && str[cur+3] === 12496) return true;
      if(str[cur] === 12483 && str[cur+1] === 12497) return true;
      pos++; cur = pos; continue;
    case 27:
      if(str[cur] === 12480 && str[cur+1] === 12523) return true;
      if(str[cur] === 12489 && str[cur+1] === 12523) return true;
      if(str[cur] === 12463 && str[cur+1] === 12452 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 28:
      if(str[cur] === 12463 && str[cur+1] === 12540 && str[cur+2] === 12531) return true;
      if(str[cur] === 12521 && str[cur+1] === 12483 && str[cur+2] === 12479) return true;
      if(str[cur] === 12531 && str[cur+1] === 12497 && str[cur+2] === 12531) return true;
      if(str[cur] === 12480 && str[cur+1] === 12483 && str[cur+2] === 12463) return true;
      if(str[cur] === 12452) {
        state = 29;
        cur += 1;
        continue;
      }
      if(str[cur] === 12494 && str[cur+1] === 12495 && str[cur+2] === 12490) return true;
      if(str[cur] === 12467 && str[cur+1] === 12489 && str[cur+2] === 12521) return true;
      if(str[cur] === 12489 && str[cur+1] === 12521) return true;
      if(str[cur] === 12540 && str[cur+1] === 12479 && str[cur+2] === 12473) return true;
      if(str[cur] === 12514 && str[cur+1] === 12523 && str[cur+2] === 12540) return true;
      if(str[cur] === 12525) {
        state = 30;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522 && str[cur+1] === 12531 && str[cur+2] === 12463) return true;
      pos++; cur = pos; continue;
    case 29:
      if(str[cur] === 12461 && str[cur+1] === 12531 && str[cur+2] === 12464) return true;
      if(str[cur] === 12523) return true;
      pos++; cur = pos; continue;
    case 30:
      if(str[cur] === 12488 && str[cur+1] === 12483 && str[cur+2] === 12463) return true;
      if(str[cur] === 12508 && str[cur+1] === 12540 && str[cur+2] === 12471) return true;
      pos++; cur = pos; continue;
    case 31:
      if(str[cur] === 12500 && str[cur+1] === 12450 && str[cur+2] === 12540) return true;
      if(str[cur] === 12522 && str[cur+1] === 12540) {
        state = 32;
        cur += 2;
        continue;
      }
      if(str[cur] === 12479 && str[cur+1] === 12540 && str[cur+2] === 12511 && str[cur+3] === 12540) return true;
      if(str[cur] === 12488 && str[cur+1] === 12521 && str[cur+2] === 12452 && str[cur+3] === 12463) return true;
      if(str[cur] === 12452 && str[cur+1] === 12463 && str[cur+2] === 12531) return true;
      if(str[cur] === 12496 && str[cur+1] === 12513) return true;
      if(str[cur] === 12508 && str[cur+1] === 12511 && str[cur+2] === 12540) return true;
      if(str[cur] === 12459) {
        state = 33;
        cur += 1;
        continue;
      }
      if(str[cur] === 12467 && str[cur+1] === 12523 && str[cur+2] === 12500) return true;
      pos++; cur = pos; continue;
    case 32:
      if(str[cur] === 12497 && str[cur+1] === 12540) return true;
      if(str[cur] === 12503) return true;
      pos++; cur = pos; continue;
    case 33:
      if(str[cur] === 12479 && str[cur+1] === 12531 && str[cur+2] === 12463) return true;
      if(str[cur] === 12531 && str[cur+1] === 12503 && str[cur+2] === 12540) return true;
      pos++; cur = pos; continue;
    case 34:
      if(str[cur] === 12483) {
        state = 35;
        cur += 1;
        continue;
      }
      if(str[cur] === 12491 && str[cur+1] === 12540 && str[cur+2] === 12479) return true;
      if(str[cur] === 12522 && str[cur+1] === 12468 && str[cur+2] === 12531) {
        state = 36;
        cur += 3;
        continue;
      }
      if(str[cur] === 12509 && str[cur+1] === 12483 && str[cur+2] === 12467) return true;
      if(str[cur] === 12481 && str[cur+1] === 12456 && str[cur+2] === 12490) return true;
      if(str[cur] === 12527 && str[cur+1] === 12523 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 35:
      if(str[cur] === 12481 && str[cur+1] === 12515 && str[cur+2] === 12510) return true;
      if(str[cur] === 12509) return true;
      if(str[cur] === 12479 && str[cur+1] === 12452 && str[cur+2] === 12471) return true;
      pos++; cur = pos; continue;
    case 36:
      return true;
      if(str[cur] === 50) return true;
      if(str[cur] === 90) return true;
      pos++; cur = pos; continue;
    case 37:
      if(str[cur] === 12459 && str[cur+1] === 12481 && str[cur+2] === 12517 && str[cur+3] === 12454) return true;
      if(str[cur] === 12472 && str[cur+1] === 12519) {
        state = 38;
        cur += 2;
        continue;
      }
      if(str[cur] === 12483 && str[cur+1] === 12500) return true;
      if(str[cur] === 12463 && str[cur+1] === 12471 && str[cur+2] === 12540) return true;
      if(str[cur] === 12481 && str[cur+1] === 12517 && str[cur+2] === 12540) return true;
      if(str[cur] === 12451) return true;
      if(str[cur] === 12531 && str[cur+1] === 12503 && str[cur+2] === 12463) return true;
      pos++; cur = pos; continue;
    case 38:
      if(str[cur] === 12483 && str[cur+1] === 12488) return true;
      if(str[cur] === 12531) return true;
      pos++; cur = pos; continue;
    case 39:
      if(str[cur] === 12452) {
        state = 40;
        cur += 1;
        continue;
      }
      if(str[cur] === 12483) {
        state = 41;
        cur += 1;
        continue;
      }
      if(str[cur] === 12501 && str[cur+1] === 12524 && str[cur+2] === 12471 && str[cur+3] === 12450) return true;
      if(str[cur] === 12503 && str[cur+1] === 12521 && str[cur+2] === 12473) return true;
      if(str[cur] === 12531 && str[cur+1] === 12479 && str[cur+2] === 12540 && str[cur+3] === 12531) return true;
      if(str[cur] === 12464 && str[cur+1] === 12521 && str[cur+2] === 12540 && str[cur+3] === 12472) return true;
      if(str[cur] === 12523 && str[cur+1] === 12488 && str[cur+2] === 12473) return true;
      if(str[cur] === 12463 && str[cur+1] === 12521 && str[cur+2] === 12452) return true;
      if(str[cur] === 12502 && str[cur+1] === 12459 && str[cur+2] === 12473) return true;
      if(str[cur] === 12486 && str[cur+1] === 12451) {
        state = 42;
        cur += 2;
        continue;
      }
      if(str[cur] === 12512 && str[cur+1] === 12497 && str[cur+2] === 12523 && str[cur+3] === 12489) return true;
      pos++; cur = pos; continue;
    case 40:
      if(str[cur] === 12467 && str[cur+1] === 12454) return true;
      if(str[cur] === 12481 && str[cur+1] === 12517 && str[cur+2] === 12454) return true;
      if(str[cur] === 12508 && str[cur+1] === 12523 && str[cur+2] === 12488) return true;
      pos++; cur = pos; continue;
    case 41:
      if(str[cur] === 12461 && str[cur+1] === 12540) return true;
      if(str[cur] === 12479) return true;
      pos++; cur = pos; continue;
    case 42:
      if(str[cur] === 12450 && str[cur+1] === 12473) return true;
      if(str[cur] === 12458 && str[cur+1] === 12473) return true;
      pos++; cur = pos; continue;
    case 43:
      if(str[cur] === 12467 && str[cur+1] === 12522 && str[cur+2] === 12470 && str[cur+3] === 12523) return true;
      if(str[cur] === 12491) {
        state = 44;
        cur += 1;
        continue;
      }
      if(str[cur] === 12512) {
        state = 45;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540 && str[cur+1] === 12480 && str[cur+2] === 12452 && str[cur+3] === 12523) return true;
      if(str[cur] === 12479 && str[cur+1] === 12481) return true;
      if(str[cur] === 12458) {
        state = 46;
        cur += 1;
        continue;
      }
      if(str[cur] === 12463 && str[cur+1] === 12479 && str[cur+2] === 12531) return true;
      if(str[cur] === 12489 && str[cur+1] === 12471 && str[cur+2] === 12471) return true;
      pos++; cur = pos; continue;
    case 44:
      if(str[cur] === 12473 && str[cur+1] === 12474 && str[cur+2] === 12513) return true;
      if(str[cur] === 12489 && str[cur+1] === 12522 && str[cur+2] === 12523) return true;
      if(str[cur] === 12468 && str[cur+1] === 12540 && str[cur+2] === 12522) return true;
      pos++; cur = pos; continue;
    case 45:
      if(str[cur] === 12473 && str[cur+1] === 12479 && str[cur+2] === 12540) return true;
      if(str[cur] === 12490 && str[cur+1] === 12452 && str[cur+2] === 12488) return true;
      pos++; cur = pos; continue;
    case 46:
      if(str[cur] === 12473 && str[cur+1] === 12496 && str[cur+2] === 12513) return true;
      if(str[cur] === 12479 && str[cur+1] === 12481) return true;
      pos++; cur = pos; continue;
    case 47:
      if(str[cur] === 12474 && str[cur+1] === 12510 && str[cur+2] === 12458 && str[cur+3] === 12454) return true;
      if(str[cur] === 12540) {
        state = 48;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522) {
        state = 50;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12494 && str[cur+2] === 12540 && str[cur+3] === 12531) return true;
      if(str[cur] === 12481 && str[cur+1] === 12515 && str[cur+2] === 12514) return true;
      if(str[cur] === 12466 && str[cur+1] === 12495 && str[cur+2] === 12531 && str[cur+3] === 12488) return true;
      if(str[cur] === 12513) {
        state = 51;
        cur += 1;
        continue;
      }
      if(str[cur] === 12469 && str[cur+1] === 12490 && str[cur+2] === 12531) return true;
      if(str[cur] === 12494 && str[cur+1] === 12503 && str[cur+2] === 12473) return true;
      if(str[cur] === 12502 && str[cur+1] === 12477 && str[cur+2] === 12523) return true;
      if(str[cur] === 12464 && str[cur+1] === 12494 && str[cur+2] === 12512) return true;
      if(str[cur] === 12523 && str[cur+1] === 12475 && str[cur+2] === 12454 && str[cur+3] === 12473) return true;
      pos++; cur = pos; continue;
    case 48:
      if(str[cur] === 12508) {
        state = 49;
        cur += 1;
        continue;
      }
      if(str[cur] === 12510 && str[cur+1] === 12523 && str[cur+2] === 12489) return true;
      pos++; cur = pos; continue;
    case 49:
      return true;
      if(str[cur] === 12483 && str[cur+1] === 12463) return true;
      pos++; cur = pos; continue;
    case 50:
      if(str[cur] === 12450 && str[cur+1] === 12489 && str[cur+2] === 12473) return true;
      if(str[cur] === 12466 && str[cur+1] === 12452 && str[cur+2] === 12484) return true;
      pos++; cur = pos; continue;
    case 51:
      if(str[cur] === 12479 && str[cur+1] === 12510) return true;
      if(str[cur] === 12514 && str[cur+1] === 12540 && str[cur+2] === 12473) return true;
      pos++; cur = pos; continue;
    case 52:
      if(str[cur] === 12527 && str[cur+1] === 12512 && str[cur+2] === 12521 && str[cur+3] === 12540) return true;
      if(str[cur] === 12531) {
        state = 53;
        cur += 1;
        continue;
      }
      if(str[cur] === 12452) {
        state = 56;
        cur += 1;
        continue;
      }
      if(str[cur] === 12491 && str[cur+1] === 12540 && str[cur+2] === 12468) return true;
      if(str[cur] === 12490 && str[cur+1] === 12462 && str[cur+2] === 12521 && str[cur+3] === 12473) return true;
      if(str[cur] === 12540 && str[cur+1] === 12490 && str[cur+2] === 12452 && str[cur+3] === 12488) return true;
      if(str[cur] === 12513 && str[cur+1] === 12495 && str[cur+2] === 12480 && str[cur+3] === 12540) return true;
      if(str[cur] === 12508 && str[cur+1] === 12493 && str[cur+2] === 12450) return true;
      if(str[cur] === 12510 && str[cur+1] === 12520 && str[cur+2] === 12540 && str[cur+3] === 12523) return true;
      if(str[cur] === 12463 && str[cur+1] === 12521 && str[cur+2] === 12499 && str[cur+3] === 12473) return true;
      pos++; cur = pos; continue;
    case 53:
      if(str[cur] === 12480 && str[cur+1] === 12540) {
        state = 54;
        cur += 2;
        continue;
      }
      if(str[cur] === 12489) {
        state = 55;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 54:
      return true;
      if(str[cur] === 12473) return true;
      pos++; cur = pos; continue;
    case 55:
      return true;
      if(str[cur] === 12497 && str[cur+1] === 12531) return true;
      pos++; cur = pos; continue;
    case 56:
      if(str[cur] === 12489 && str[cur+1] === 12531) return true;
      if(str[cur] === 12507 && str[cur+1] === 12540 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 57:
      if(str[cur] === 12489) {
        state = 58;
        cur += 1;
        continue;
      }
      if(str[cur] === 12515) {
        state = 61;
        cur += 1;
        continue;
      }
      if(str[cur] === 12519 && str[cur+1] === 12525) {
        state = 62;
        cur += 2;
        continue;
      }
      if(str[cur] === 12517 && str[cur+1] === 12540 && str[cur+2] === 12521) return true;
      pos++; cur = pos; continue;
    case 58:
      if(str[cur] === 12521 && str[cur+1] === 12531) {
        state = 59;
        cur += 2;
        continue;
      }
      if(str[cur] === 12522 && str[cur+1] === 12540) {
        state = 60;
        cur += 2;
        continue;
      }
      if(str[cur] === 12463 && str[cur+1] === 12452 && str[cur+2] === 12531) return true;
      if(str[cur] === 12461 && str[cur+1] === 12531 && str[cur+2] === 12464) return true;
      pos++; cur = pos; continue;
    case 59:
      if(str[cur] === 9792) return true;
      if(str[cur] === 9794) return true;
      pos++; cur = pos; continue;
    case 60:
      if(str[cur] === 12490) return true;
      if(str[cur] === 12494) return true;
      pos++; cur = pos; continue;
    case 61:
      if(str[cur] === 12523 && str[cur+1] === 12510 && str[cur+2] === 12540) return true;
      if(str[cur] === 12540 && str[cur+1] === 12473) return true;
      pos++; cur = pos; continue;
    case 62:
      if(str[cur] === 12478) return true;
      if(str[cur] === 12514) return true;
      if(str[cur] === 12508 && str[cur+1] === 12531) return true;
      if(str[cur] === 12488 && str[cur+1] === 12494) return true;
      pos++; cur = pos; continue;
    case 63:
      if(str[cur] === 12467 && str[cur+1] === 12531) return true;
      if(str[cur] === 12476 && str[cur+1] === 12522 && str[cur+2] === 12450) return true;
      if(str[cur] === 12474 && str[cur+1] === 12524 && str[cur+2] === 12452 && str[cur+3] === 12489) return true;
      if(str[cur] === 12488 && str[cur+1] === 12512) return true;
      pos++; cur = pos; continue;
    case 64:
      if(str[cur] === 12463 && str[cur+1] === 12522 && str[cur+2] === 12531) return true;
      if(str[cur] === 12522 && str[cur+1] === 12531) return true;
      if(str[cur] === 12486 && str[cur+1] === 12521) return true;
      if(str[cur] === 12503 && str[cur+1] === 12522 && str[cur+2] === 12531) return true;
      if(str[cur] === 12521 && str[cur+1] === 12473 && str[cur+2] === 12523) return true;
      pos++; cur = pos; continue;
    case 65:
      if(str[cur] === 12460 && str[cur+1] === 12452 && str[cur+2] === 12489 && str[cur+3] === 12473) return true;
      if(str[cur] === 12496 && str[cur+1] === 12483 && str[cur+2] === 12488) return true;
      pos++; cur = pos; continue;
    case 66:
      if(str[cur] === 12523) {
        state = 67;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540) {
        state = 68;
        cur += 1;
        continue;
      }
      if(str[cur] === 12525 && str[cur+1] === 12540) {
        state = 70;
        cur += 2;
        continue;
      }
      if(str[cur] === 12510 && str[cur+1] === 12478 && str[cur+2] === 12454) return true;
      if(str[cur] === 12491 && str[cur+1] === 12519 && str[cur+2] === 12491 && str[cur+3] === 12519) return true;
      if(str[cur] === 12463 && str[cur+1] === 12522 && str[cur+2] === 12531) return true;
      if(str[cur] === 12454 && str[cur+1] === 12459 && str[cur+2] === 12470 && str[cur+3] === 12523) return true;
      if(str[cur] === 12531 && str[cur+1] === 12505) return true;
      pos++; cur = pos; continue;
    case 67:
      if(str[cur] === 12480 && str[cur+1] === 12483 && str[cur+2] === 12463) return true;
      if(str[cur] === 12496 && str[cur+1] === 12483 && str[cur+2] === 12488) return true;
      pos++; cur = pos; continue;
    case 68:
      if(str[cur] === 12473) {
        state = 69;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522 && str[cur+1] === 12461 && str[cur+2] === 12540) return true;
      pos++; cur = pos; continue;
    case 69:
      return true;
      if(str[cur] === 12488) return true;
      pos++; cur = pos; continue;
    case 70:
      if(str[cur] === 12491 && str[cur+1] === 12515) return true;
      if(str[cur] === 12531) return true;
      pos++; cur = pos; continue;
    case 71:
      if(str[cur] === 12478 && str[cur+1] === 12494 && str[cur+2] === 12463 && str[cur+3] === 12469) return true;
      if(str[cur] === 12483) {
        state = 72;
        cur += 1;
        continue;
      }
      if(str[cur] === 12510) {
        state = 73;
        cur += 1;
        continue;
      }
      if(str[cur] === 12456 && str[cur+1] === 12488 && str[cur+2] === 12523) return true;
      pos++; cur = pos; continue;
    case 72:
      if(str[cur] === 12463 && str[cur+1] === 12521 && str[cur+2] === 12540) return true;
      if(str[cur] === 12471 && str[cur+1] === 12540) return true;
      pos++; cur = pos; continue;
    case 73:
      if(str[cur] === 12465 && str[cur+1] === 12525) return true;
      if(str[cur] === 12474 && str[cur+1] === 12531) return true;
      pos++; cur = pos; continue;
    case 74:
      if(str[cur] === 12469 && str[cur+1] === 12452 && str[cur+2] === 12495 && str[cur+3] === 12490) return true;
      if(str[cur] === 12521 && str[cur+1] === 12502) return true;
      if(str[cur] === 12525 && str[cur+1] === 12496 && str[cur+2] === 12483 && str[cur+3] === 12488) return true;
      if(str[cur] === 12492 && str[cur+1] === 12462 && str[cur+2] === 12480 && str[cur+3] === 12510) return true;
      if(str[cur] === 12481 && str[cur+1] === 12540 && str[cur+2] === 12488) return true;
      if(str[cur] === 12524 && str[cur+1] === 12475 && str[cur+2] === 12522 && str[cur+3] === 12450) return true;
      pos++; cur = pos; continue;
    case 75:
      if(str[cur] === 12454 && str[cur+1] === 12527 && str[cur+2] === 12454) return true;
      if(str[cur] === 12521) {
        state = 76;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523) {
        state = 77;
        cur += 1;
        continue;
      }
      if(str[cur] === 12483 && str[cur+1] === 12481 && str[cur+2] === 12540 && str[cur+3] === 12523) return true;
      if(str[cur] === 12540 && str[cur+1] === 12523 && str[cur+2] === 12523) return true;
      if(str[cur] === 12481 && str[cur+1] === 12522 && str[cur+2] === 12473) return true;
      pos++; cur = pos; continue;
    case 76:
      if(str[cur] === 12473) return true;
      if(str[cur] === 12475 && str[cur+1] === 12463 && str[cur+2] === 12488) return true;
      pos++; cur = pos; continue;
    case 77:
      if(str[cur] === 12461 && str[cur+1] === 12450) return true;
      if(str[cur] === 12471 && str[cur+1] === 12455 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 78:
      if(str[cur] === 12523 && str[cur+1] === 12501 && str[cur+2] === 12457 && str[cur+3] === 12531) return true;
      if(str[cur] === 12531 && str[cur+1] === 12472 && str[cur+2] === 12515 && str[cur+3] === 12521) return true;
      if(str[cur] === 12467 && str[cur+1] === 12467) return true;
      if(str[cur] === 12454 && str[cur+1] === 12459 && str[cur+2] === 12470 && str[cur+3] === 12523) return true;
      if(str[cur] === 12472 && str[cur+1] === 12515 && str[cur+2] === 12531 && str[cur+3] === 12508) return true;
      pos++; cur = pos; continue;
    case 79:
      if(str[cur] === 12451) {
        state = 80;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12522 && str[cur+2] === 12517 && str[cur+3] === 12454) return true;
      if(str[cur] === 12522 && str[cur+1] === 12496 && str[cur+2] === 12540 && str[cur+3] === 12489) return true;
      if(str[cur] === 12523 && str[cur+1] === 12499 && str[cur+2] === 12523) return true;
      if(str[cur] === 12458 && str[cur+1] === 12461 && str[cur+2] === 12471 && str[cur+3] === 12473) return true;
      pos++; cur = pos; continue;
    case 80:
      if(str[cur] === 12450 && str[cur+1] === 12523 && str[cur+2] === 12460) return true;
      if(str[cur] === 12464 && str[cur+1] === 12480) return true;
      pos++; cur = pos; continue;
    case 81:
      if(str[cur] === 12464 && str[cur+1] === 12488 && str[cur+2] === 12522 && str[cur+3] === 12458) return true;
      if(str[cur] === 12540) {
        state = 82;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12496 && str[cur+2] === 12523) return true;
      if(str[cur] === 12452 && str[cur+1] === 12494 && str[cur+2] === 12540 && str[cur+3] === 12474) return true;
      pos++; cur = pos; continue;
    case 82:
      if(str[cur] === 12463 && str[cur+1] === 12521 && str[cur+2] === 12452) return true;
      if(str[cur] === 12486 && str[cur+1] === 12531 && str[cur+2] === 12464) return true;
      pos++; cur = pos; continue;
    case 83:
      if(str[cur] === 12522 && str[cur+1] === 12483 && str[cur+2] === 12497 && str[cur+3] === 12540) return true;
      if(str[cur] === 12523 && str[cur+1] === 12471 && str[cur+2] === 12450 && str[cur+3] === 12531) return true;
      if(str[cur] === 12521 && str[cur+1] === 12483 && str[cur+2] === 12503) return true;
      pos++; cur = pos; continue;
    case 84:
      if(str[cur] === 12480 && str[cur+1] === 12484 && str[cur+2] === 12508 && str[cur+3] === 12511) return true;
      if(str[cur] === 12531) {
        state = 85;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523) {
        state = 86;
        cur += 1;
        continue;
      }
      if(str[cur] === 12479 && str[cur+1] === 12489 && str[cur+2] === 12460 && str[cur+3] === 12473) return true;
      if(str[cur] === 12464) {
        state = 87;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522 && str[cur+1] === 12523) {
        state = 89;
        cur += 2;
        continue;
      }
      if(str[cur] === 12483 && str[cur+1] === 12473 && str[cur+2] === 12464 && str[cur+3] === 12510) return true;
      if(str[cur] === 12518 && str[cur+1] === 12523 && str[cur+2] === 12489) return true;
      if(str[cur] === 12463 && str[cur+1] === 12494 && str[cur+2] === 12471 && str[cur+3] === 12479) return true;
      if(str[cur] === 12452 && str[cur+1] === 12490 && str[cur+2] === 12531) return true;
      if(str[cur] === 12493 && str[cur+1] === 12493) return true;
      if(str[cur] === 12473 && str[cur+1] === 12461 && str[cur+2] === 12483 && str[cur+3] === 12497) return true;
      if(str[cur] === 12491 && str[cur+1] === 12517 && str[cur+2] === 12540 && str[cur+3] === 12521) return true;
      if(str[cur] === 12490 && str[cur+1] === 12501 && str[cur+2] === 12451) return true;
      pos++; cur = pos; continue;
    case 85:
      if(str[cur] === 12461 && str[cur+1] === 12540) return true;
      if(str[cur] === 12479 && str[cur+1] === 12452 && str[cur+2] === 12531) return true;
      if(str[cur] === 12512 && str[cur+1] === 12540) return true;
      pos++; cur = pos; continue;
    case 86:
      if(str[cur] === 12494 && str[cur+1] === 12540 && str[cur+2] === 12512) return true;
      if(str[cur] === 12510 && str[cur+1] === 12452 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 87:
      if(str[cur] === 12459 && str[cur+1] === 12523 && str[cur+2] === 12468) return true;
      if(str[cur] === 12510) {
        state = 88;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 88:
      if(str[cur] === 12483 && str[cur+1] === 12464) return true;
      if(str[cur] === 12521 && str[cur+1] === 12471) return true;
      pos++; cur = pos; continue;
    case 89:
      return true;
      if(str[cur] === 12522) return true;
      pos++; cur = pos; continue;
    case 90:
      if(str[cur] === 12521 && str[cur+1] === 12460 && str[cur+2] === 12521) return true;
      if(str[cur] === 12540) {
        state = 91;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523 && str[cur+1] === 12540 && str[cur+2] === 12521) return true;
      if(str[cur] === 12496 && str[cur+1] === 12452 && str[cur+2] === 12488) return true;
      if(str[cur] === 12502 && str[cur+1] === 12522 && str[cur+2] === 12450 && str[cur+3] === 12473) return true;
      pos++; cur = pos; continue;
    case 91:
      if(str[cur] === 12487 && str[cur+1] === 12451) return true;
      if(str[cur] === 12513 && str[cur+1] === 12452 && str[cur+2] === 12523) return true;
      pos++; cur = pos; continue;
    case 92:
      if(str[cur] === 12452 && str[cur+1] === 12531 && str[cur+2] === 12487 && str[cur+3] === 12451) return true;
      if(str[cur] === 12484) {
        state = 93;
        cur += 1;
        continue;
      }
      if(str[cur] === 12477) {
        state = 94;
        cur += 1;
        continue;
      }
      if(str[cur] === 12497 && str[cur+1] === 12540) return true;
      if(str[cur] === 12522 && str[cur+1] === 12512 && str[cur+2] === 12540) return true;
      pos++; cur = pos; continue;
    case 93:
      if(str[cur] === 12489 && str[cur+1] === 12531) return true;
      if(str[cur] === 12508 && str[cur+1] === 12483 && str[cur+2] === 12488) return true;
      pos++; cur = pos; continue;
    case 94:
      if(str[cur] === 12483 && str[cur+1] === 12461 && str[cur+2] === 12540) return true;
      if(str[cur] === 12495 && str[cur+1] === 12481) return true;
      pos++; cur = pos; continue;
    case 95:
      if(str[cur] === 12531 && str[cur+1] === 12479 && str[cur+2] === 12525 && str[cur+3] === 12473) return true;
      if(str[cur] === 12540 && str[cur+1] === 12471 && str[cur+2] === 12451) return true;
      if(str[cur] === 12512 && str[cur+1] === 12483 && str[cur+2] === 12477) return true;
      if(str[cur] === 12483 && str[cur+1] === 12461 && str[cur+2] === 12531 && str[cur+3] === 12464) return true;
      if(str[cur] === 12452 && str[cur+1] === 12467 && str[cur+2] === 12454 && str[cur+3] === 12458) return true;
      pos++; cur = pos; continue;
    case 96:
      if(str[cur] === 12524 && str[cur+1] === 12452 && str[cur+2] === 12489 && str[cur+3] === 12523) return true;
      if(str[cur] === 12531 && str[cur+1] === 12466 && str[cur+2] === 12521 && str[cur+3] === 12540) return true;
      if(str[cur] === 12461) {
        state = 97;
        cur += 1;
        continue;
      }
      if(str[cur] === 12463 && str[cur+1] === 12471 && str[cur+2] === 12540) return true;
      pos++; cur = pos; continue;
    case 97:
      if(str[cur] === 12459 && str[cur+1] === 12502 && str[cur+2] === 12522) return true;
      if(str[cur] === 12527 && str[cur+1] === 12521 && str[cur+2] === 12471) return true;
      if(str[cur] === 12494 && str[cur+1] === 12458 && str[cur+2] === 12540) return true;
      if(str[cur] === 12513 && str[cur+1] === 12494 && str[cur+2] === 12467) return true;
      pos++; cur = pos; continue;
    case 98:
      if(str[cur] === 12491 && str[cur+1] === 12494 && str[cur+2] === 12467) return true;
      if(str[cur] === 12531 && str[cur+1] === 12522 && str[cur+2] === 12461 && str[cur+3] === 12540) return true;
      if(str[cur] === 12479 && str[cur+1] === 12483 && str[cur+2] === 12467) return true;
      if(str[cur] === 12459 && str[cur+1] === 12471 && str[cur+2] === 12515 && str[cur+3] === 12514) return true;
      pos++; cur = pos; continue;
    case 99:
      if(str[cur] === 12479) {
        state = 100;
        cur += 1;
        continue;
      }
      if(str[cur] === 12494 && str[cur+1] === 12463 && str[cur+2] === 12521 && str[cur+3] === 12466) return true;
      if(str[cur] === 12460) {
        state = 101;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522 && str[cur+1] === 12540 && str[cur+2] === 12503) return true;
      pos++; cur = pos; continue;
    case 100:
      if(str[cur] === 12514 && str[cur+1] === 12531) return true;
      if(str[cur] === 12531 && str[cur+1] === 12464) return true;
      if(str[cur] === 12464 && str[cur+1] === 12525 && str[cur+2] === 12473) return true;
      pos++; cur = pos; continue;
    case 101:
      if(str[cur] === 12491 && str[cur+1] === 12454 && str[cur+2] === 12512) return true;
      if(str[cur] === 12516 && str[cur+1] === 12531 && str[cur+2] === 12510) return true;
      pos++; cur = pos; continue;
    case 102:
      if(str[cur] === 12463) {
        state = 103;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540) {
        state = 104;
        cur += 1;
        continue;
      }
      if(str[cur] === 12460 && str[cur+1] === 12540 && str[cur+2] === 12473) return true;
      if(str[cur] === 12531) {
        state = 106;
        cur += 1;
        continue;
      }
      if(str[cur] === 12468 && str[cur+1] === 12540 && str[cur+2] === 12512) return true;
      if(str[cur] === 12472 && str[cur+1] === 12519 && str[cur+2] === 12483 && str[cur+3] === 12481) return true;
      if(str[cur] === 12479 && str[cur+1] === 12452 && str[cur+2] === 12488 && str[cur+3] === 12473) return true;
      if(str[cur] === 12521 && str[cur+1] === 12500 && str[cur+2] === 12458 && str[cur+3] === 12531) return true;
      if(str[cur] === 12469 && str[cur+1] === 12452 && str[cur+2] === 12489 && str[cur+3] === 12531) return true;
      pos++; cur = pos; continue;
    case 103:
      if(str[cur] === 12463 && str[cur+1] === 12521 && str[cur+2] === 12466) return true;
      if(str[cur] === 12465 && str[cur+1] === 12452 && str[cur+2] === 12523) return true;
      if(str[cur] === 12525 && str[cur+1] === 12483 && str[cur+2] === 12464) return true;
      pos++; cur = pos; continue;
    case 104:
      if(str[cur] === 12489) {
        state = 105;
        cur += 1;
        continue;
      }
      if(str[cur] === 12502 && str[cur+1] === 12523) return true;
      if(str[cur] === 12511 && str[cur+1] === 12521 && str[cur+2] === 12540) return true;
      if(str[cur] === 12479 && str[cur+1] === 12463 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 105:
      if(str[cur] === 12522 && str[cur+1] === 12458) return true;
      if(str[cur] === 12540) return true;
      pos++; cur = pos; continue;
    case 106:
      if(str[cur] === 12501 && str[cur+1] === 12449 && str[cur+2] === 12531) return true;
      if(str[cur] === 12513 && str[cur+1] === 12523) return true;
      if(str[cur] === 12459 && str[cur+1] === 12521 && str[cur+2] === 12473) return true;
      pos++; cur = pos; continue;
    case 107:
      if(str[cur] === 12471 && str[cur+1] === 12484 && str[cur+2] === 12502 && str[cur+3] === 12486) return true;
      if(str[cur] === 12527 && str[cur+1] === 12540 && str[cur+2] === 12463) return true;
      if(str[cur] === 12540 && str[cur+1] === 12502 && str[cur+2] === 12452) return true;
      if(str[cur] === 12488 && str[cur+1] === 12510 && str[cur+2] === 12523) return true;
      if(str[cur] === 12494 && str[cur+1] === 12512 && str[cur+2] === 12540) return true;
      if(str[cur] === 12523 && str[cur+1] === 12511 && str[cur+2] === 12540 && str[cur+3] === 12476) return true;
      pos++; cur = pos; continue;
    case 108:
      if(str[cur] === 12515) {
        state = 109;
        cur += 1;
        continue;
      }
      if(str[cur] === 12521 && str[cur+1] === 12486 && str[cur+2] === 12451 && str[cur+3] === 12490) return true;
      pos++; cur = pos; continue;
    case 109:
      if(str[cur] === 12521 && str[cur+1] === 12489 && str[cur+2] === 12473) return true;
      if(str[cur] === 12525 && str[cur+1] === 12483 && str[cur+2] === 12503) return true;
      pos++; cur = pos; continue;
    case 110:
      if(str[cur] === 12489) {
        state = 111;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12516 && str[cur+2] === 12531 && str[cur+3] === 12510) return true;
      if(str[cur] === 12511) {
        state = 112;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523 && str[cur+1] === 12461 && str[cur+2] === 12514 && str[cur+3] === 12494) return true;
      if(str[cur] === 12472 && str[cur+1] === 12525 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 111:
      if(str[cur] === 12521 && str[cur+1] === 12531) return true;
      if(str[cur] === 12531) return true;
      if(str[cur] === 12461 && str[cur+1] === 12531 && str[cur+2] === 12464) return true;
      pos++; cur = pos; continue;
    case 112:
      if(str[cur] === 12459 && str[cur+1] === 12521 && str[cur+2] === 12473) return true;
      if(str[cur] === 12521 && str[cur+1] === 12511) return true;
      pos++; cur = pos; continue;
    case 113:
      if(str[cur] === 12450 && str[cur+1] === 12467 && str[cur+2] === 12452 && str[cur+3] === 12523) return true;
      if(str[cur] === 12487 && str[cur+1] === 12451) {
        state = 114;
        cur += 2;
        continue;
      }
      if(str[cur] === 12472) {
        state = 115;
        cur += 1;
        continue;
      }
      if(str[cur] === 12483 && str[cur+1] === 12463 && str[cur+2] === 12454 && str[cur+3] === 12470) return true;
      if(str[cur] === 12531 && str[cur+1] === 12488 && str[cur+2] === 12521 && str[cur+3] === 12540) return true;
      pos++; cur = pos; continue;
    case 114:
      if(str[cur] === 12450 && str[cur+1] === 12531) return true;
      if(str[cur] === 12496) return true;
      pos++; cur = pos; continue;
    case 115:
      if(str[cur] === 12450 && str[cur+1] === 12452 && str[cur+2] === 12473) return true;
      if(str[cur] === 12525 && str[cur+1] === 12483 && str[cur+2] === 12463) return true;
      if(str[cur] === 12473 && str[cur+1] === 12481 && str[cur+2] === 12523) return true;
      if(str[cur] === 12462 && str[cur+1] === 12460 && str[cur+2] === 12473) return true;
      pos++; cur = pos; continue;
    case 116:
      if(str[cur] === 12464 && str[cur+1] === 12470 && str[cur+2] === 12464 && str[cur+3] === 12510) return true;
      if(str[cur] === 12517) {
        state = 117;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540 && str[cur+1] === 12521 && str[cur+2] === 12531 && str[cur+3] === 12473) return true;
      if(str[cur] === 12521 && str[cur+1] === 12540 && str[cur+2] === 12481) return true;
      if(str[cur] === 12496 && str[cur+1] === 12467 && str[cur+2] === 12452 && str[cur+3] === 12523) return true;
      pos++; cur = pos; continue;
    case 117:
      if(str[cur] === 12468 && str[cur+1] === 12531) return true;
      if(str[cur] === 12503 && str[cur+1] === 12488 && str[cur+2] === 12523) return true;
      if(str[cur] === 12459 && str[cur+1] === 12452 && str[cur+2] === 12531) return true;
      if(str[cur] === 12506 && str[cur+1] === 12483 && str[cur+2] === 12479) return true;
      pos++; cur = pos; continue;
    case 118:
      if(str[cur] === 12488 && str[cur+1] === 12505) {
        state = 119;
        cur += 2;
        continue;
      }
      if(str[cur] === 12525) {
        state = 120;
        cur += 1;
        continue;
      }
      if(str[cur] === 12452 && str[cur+1] === 12522 && str[cur+2] === 12540 && str[cur+3] === 12501) return true;
      pos++; cur = pos; continue;
    case 119:
      if(str[cur] === 12479 && str[cur+1] === 12540) return true;
      if(str[cur] === 12488 && str[cur+1] === 12531) return true;
      pos++; cur = pos; continue;
    case 120:
      if(str[cur] === 12505 && str[cur+1] === 12523 && str[cur+2] === 12488) return true;
      if(str[cur] === 12522 && str[cur+1] === 12531 && str[cur+2] === 12460) return true;
      pos++; cur = pos; continue;
    case 121:
      if(str[cur] === 12455) {
        state = 122;
        cur += 1;
        continue;
      }
      if(str[cur] === 12540 && str[cur+1] === 12489 && str[cur+2] === 12521) return true;
      if(str[cur] === 12515 && str[cur+1] === 12527 && str[cur+2] === 12540 && str[cur+3] === 12474) return true;
      if(str[cur] === 12470 && str[cur+1] === 12522 && str[cur+2] === 12460 && str[cur+3] === 12540) return true;
      pos++; cur = pos; continue;
    case 122:
      if(str[cur] === 12452 && str[cur+1] === 12511) return true;
      if(str[cur] === 12523 && str[cur+1] === 12480 && str[cur+2] === 12540) return true;
      pos++; cur = pos; continue;
    case 123:
      if(str[cur] === 12483 && str[cur+1] === 12484 && str[cur+2] === 12540) return true;
      if(str[cur] === 12510) {
        state = 124;
        cur += 1;
        continue;
      }
      if(str[cur] === 12493 && str[cur+1] === 12508 && str[cur+2] === 12540) return true;
      if(str[cur] === 12484 && str[cur+1] === 12505 && str[cur+2] === 12452) return true;
      if(str[cur] === 12486 && str[cur+1] === 12488 && str[cur+2] === 12503 && str[cur+3] === 12473) return true;
      pos++; cur = pos; continue;
    case 124:
      if(str[cur] === 12470 && str[cur+1] === 12521 && str[cur+2] === 12471) return true;
      if(str[cur] === 12479 && str[cur+1] === 12510) return true;
      if(str[cur] === 12531 && str[cur+1] === 12479) return true;
      pos++; cur = pos; continue;
    case 125:
      if(str[cur] === 12499 && str[cur+1] === 12527 && str[cur+2] === 12521 && str[cur+3] === 12540) return true;
      if(str[cur] === 12524) {
        state = 126;
        cur += 1;
        continue;
      }
      if(str[cur] === 12452 && str[cur+1] === 12497 && str[cur+2] === 12512) return true;
      if(str[cur] === 12540 && str[cur+1] === 12501 && str[cur+2] === 12451) return true;
      if(str[cur] === 12450 && str[cur+1] === 12540 && str[cur+2] === 12512 && str[cur+3] === 12489) return true;
      if(str[cur] === 12531) {
        state = 128;
        cur += 1;
        continue;
      }
      if(str[cur] === 12493 && str[cur+1] === 12467) {
        state = 129;
        cur += 2;
        continue;
      }
      if(str[cur] === 12486 && str[cur+1] === 12508 && str[cur+2] === 12540 && str[cur+3] === 12473) return true;
      if(str[cur] === 12523 && str[cur+1] === 12524 && str[cur+2] === 12452 && str[cur+3] === 12489) return true;
      if(str[cur] === 12512 && str[cur+1] === 12522 && str[cur+2] === 12483 && str[cur+3] === 12488) return true;
      pos++; cur = pos; continue;
    case 126:
      if(str[cur] === 12461) {
        state = 127;
        cur += 1;
        continue;
      }
      if(str[cur] === 12502 && str[cur+1] === 12540) return true;
      pos++; cur = pos; continue;
    case 127:
      if(str[cur] === 12483 && str[cur+1] === 12489) return true;
      if(str[cur] === 12502 && str[cur+1] === 12523) return true;
      pos++; cur = pos; continue;
    case 128:
      if(str[cur] === 12486 && str[cur+1] === 12452) return true;
      if(str[cur] === 12506 && str[cur+1] === 12523 && str[cur+2] === 12488) return true;
      pos++; cur = pos; continue;
    case 129:
      return true;
      if(str[cur] === 12525 && str[cur+1] === 12525) return true;
      pos++; cur = pos; continue;
    case 130:
      if(str[cur] === 12462 && str[cur+1] === 12450) return true;
      if(str[cur] === 12540 && str[cur+1] === 12472 && str[cur+2] === 12517 && str[cur+3] === 12521) return true;
      if(str[cur] === 12531 && str[cur+1] === 12497 && str[cur+2] === 12483 && str[cur+3] === 12497) return true;
      if(str[cur] === 12522 && str[cur+1] === 12522) return true;
      if(str[cur] === 12490 && str[cur+1] === 12488 && str[cur+2] === 12540 && str[cur+3] === 12531) return true;
      if(str[cur] === 12463 && str[cur+1] === 12471 && str[cur+2] === 12458) return true;
      if(str[cur] === 12459 && str[cur+1] === 12522 && str[cur+2] === 12458) return true;
      pos++; cur = pos; continue;
    case 131:
      if(str[cur] === 12521 && str[cur+1] === 12483 && str[cur+2] === 12461 && str[cur+3] === 12540) return true;
      if(str[cur] === 12540) {
        state = 132;
        cur += 1;
        continue;
      }
      if(str[cur] === 12523 && str[cur+1] === 12540) return true;
      if(str[cur] === 12499 && str[cur+1] === 12451) return true;
      if(str[cur] === 12452 && str[cur+1] === 12476 && str[cur+2] === 12523) return true;
      if(str[cur] === 12491 && str[cur+1] === 12515 && str[cur+2] === 12483 && str[cur+3] === 12488) return true;
      pos++; cur = pos; continue;
    case 132:
      if(str[cur] === 12473 && str[cur+1] === 12479 && str[cur+2] === 12540) return true;
      if(str[cur] === 12496 && str[cur+1] === 12540) {
        state = 133;
        cur += 2;
        continue;
      }
      if(str[cur] === 12500 && str[cur+1] === 12483 && str[cur+2] === 12464) return true;
      pos++; cur = pos; continue;
    case 133:
      return true;
      if(str[cur] === 12531) return true;
      pos++; cur = pos; continue;
    case 134:
      if(str[cur] === 12491 && str[cur+1] === 12522 && str[cur+2] === 12517 && str[cur+3] === 12454) return true;
      if(str[cur] === 12517 && str[cur+1] === 12454) {
        state = 135;
        cur += 2;
        continue;
      }
      if(str[cur] === 12523 && str[cur+1] === 12479 && str[cur+2] === 12531 && str[cur+3] === 12463) return true;
      if(str[cur] === 12474 && str[cur+1] === 12468 && str[cur+2] === 12525 && str[cur+3] === 12454) return true;
      if(str[cur] === 12525 && str[cur+1] === 12459 && str[cur+2] === 12525 && str[cur+3] === 12473) return true;
      if(str[cur] === 12494) {
        state = 136;
        cur += 1;
        continue;
      }
      if(str[cur] === 12484 && str[cur+1] === 12495 && str[cur+2] === 12491 && str[cur+3] === 12540) return true;
      if(str[cur] === 12511 && str[cur+1] === 12525) {
        state = 137;
        cur += 2;
        continue;
      }
      if(str[cur] === 12459 && str[cur+1] === 12523 && str[cur+2] === 12466) return true;
      pos++; cur = pos; continue;
    case 135:
      return true;
      if(str[cur] === 12484 && str[cur+1] === 12540) return true;
      pos++; cur = pos; continue;
    case 136:
      if(str[cur] === 12510 && str[cur+1] === 12480 && str[cur+2] === 12512) return true;
      if(str[cur] === 12512 && str[cur+1] === 12483 && str[cur+2] === 12481) return true;
      pos++; cur = pos; continue;
    case 137:
      if(str[cur] === 12483 && str[cur+1] === 12503) return true;
      if(str[cur] === 12523) return true;
      pos++; cur = pos; continue;
    case 138:
      if(str[cur] === 12463 && str[cur+1] === 12522 && str[cur+2] === 12517 && str[cur+3] === 12540) return true;
      if(str[cur] === 12493 && str[cur+1] === 12483 && str[cur+2] === 12467) return true;
      if(str[cur] === 12460 && str[cur+1] === 12493 && str[cur+2] === 12540 && str[cur+3] === 12523) return true;
      if(str[cur] === 12522) {
        state = 139;
        cur += 1;
        continue;
      }
      if(str[cur] === 12483 && str[cur+1] === 12469 && str[cur+2] === 12512) return true;
      if(str[cur] === 12500 && str[cur+1] === 12490 && str[cur+2] === 12473) return true;
      if(str[cur] === 12473) {
        state = 140;
        cur += 1;
        continue;
      }
      if(str[cur] === 12502 && str[cur+1] === 12493 && str[cur+2] === 12540 && str[cur+3] === 12463) return true;
      if(str[cur] === 12531 && str[cur+1] === 12486 && str[cur+2] === 12540 && str[cur+3] === 12523) return true;
      if(str[cur] === 12516 && str[cur+1] === 12471 && str[cur+2] === 12460 && str[cur+3] === 12513) return true;
      pos++; cur = pos; continue;
    case 139:
      if(str[cur] === 12486 && str[cur+1] === 12516 && str[cur+2] === 12510) return true;
      if(str[cur] === 12540 && str[cur+1] === 12475 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 140:
      if(str[cur] === 12502 && str[cur+1] === 12524 && str[cur+2] === 12525) return true;
      if(str[cur] === 12508 && str[cur+1] === 12540) return true;
      pos++; cur = pos; continue;
    case 141:
      if(str[cur] === 12467 && str[cur+1] === 12522 && str[cur+2] === 12540 && str[cur+3] === 12479) return true;
      if(str[cur] === 12519 && str[cur+1] === 12531 && str[cur+2] === 12481 && str[cur+3] === 12540) return true;
      if(str[cur] === 12515 && str[cur+1] === 12540 && str[cur+2] === 12524 && str[cur+3] === 12512) return true;
      if(str[cur] === 12523) {
        state = 142;
        cur += 1;
        continue;
      }
      if(str[cur] === 12522 && str[cur+1] === 12540 && str[cur+2] === 12531) return true;
      if(str[cur] === 12455 && str[cur+1] === 12522) {
        state = 143;
        cur += 2;
        continue;
      }
      pos++; cur = pos; continue;
    case 142:
      if(str[cur] === 12479 && str[cur+1] === 12522 && str[cur+2] === 12473) return true;
      if(str[cur] === 12483 && str[cur+1] === 12488) return true;
      pos++; cur = pos; continue;
    case 143:
      if(str[cur] === 12512) return true;
      if(str[cur] === 12531 && str[cur+1] === 12508) return true;
      pos++; cur = pos; continue;
    case 144:
      if(str[cur] === 12454 && str[cur+1] === 12458 && str[cur+2] === 12454) return true;
      if(str[cur] === 12540 && str[cur+1] === 12507 && str[cur+2] === 12540) return true;
      if(str[cur] === 12456 && str[cur+1] === 12523) {
        state = 145;
        cur += 2;
        continue;
      }
      pos++; cur = pos; continue;
    case 145:
      if(str[cur] === 12458 && str[cur+1] === 12540) return true;
      if(str[cur] === 12467) return true;
      pos++; cur = pos; continue;
    case 146:
      if(str[cur] === 12523 && str[cur+1] === 12494 && str[cur+2] === 12474 && str[cur+3] === 12463) return true;
      if(str[cur] === 12540 && str[cur+1] === 12462 && str[cur+2] === 12521 && str[cur+3] === 12473) return true;
      if(str[cur] === 12510 && str[cur+1] === 12527 && str[cur+2] === 12523) return true;
      if(str[cur] === 12494 && str[cur+1] === 12527 && str[cur+2] === 12540 && str[cur+3] === 12523) return true;
      pos++; cur = pos; continue;
    case 147:
      if(str[cur] === 12452 && str[cur+1] === 12486 && str[cur+2] === 12451) {
        state = 148;
        cur += 3;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12489 && str[cur+2] === 12540 && str[cur+3] === 12523) return true;
      if(str[cur] === 12458 && str[cur+1] === 12521 && str[cur+2] === 12531 && str[cur+3] === 12488) return true;
      pos++; cur = pos; continue;
    case 148:
      return true;
      if(str[cur] === 12458) return true;
      pos++; cur = pos; continue;
    case 149:
      if(str[cur] === 12458 && str[cur+1] === 12540) return true;
      if(str[cur] === 12510 && str[cur+1] === 12463 && str[cur+2] === 12525 && str[cur+3] === 12540) return true;
      if(str[cur] === 12465 && str[cur+1] === 12491 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 150:
      if(str[cur] === 12454 && str[cur+1] === 12510) {
        state = 151;
        cur += 2;
        continue;
      }
      if(str[cur] === 12481 && str[cur+1] === 12517 && str[cur+2] === 12540 && str[cur+3] === 12523) return true;
      if(str[cur] === 12483 && str[cur+1] === 12463 && str[cur+2] === 12523) return true;
      if(str[cur] === 12463) {
        state = 152;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 151:
      return true;
      if(str[cur] === 12540 && str[cur+1] === 12472) return true;
      pos++; cur = pos; continue;
    case 152:
      if(str[cur] === 12496 && str[cur+1] === 12540 && str[cur+2] === 12489) return true;
      if(str[cur] === 12507 && str[cur+1] === 12540 && str[cur+2] === 12463) return true;
      pos++; cur = pos; continue;
    case 153:
      if(str[cur] === 12523 && str[cur+1] === 12525 && str[cur+2] === 12483 && str[cur+3] === 12463) return true;
      if(str[cur] === 12540 && str[cur+1] === 12490) {
        state = 154;
        cur += 2;
        continue;
      }
      pos++; cur = pos; continue;
    case 154:
      if(str[cur] === 12494) return true;
      if(str[cur] === 12531 && str[cur+1] === 12473) return true;
      pos++; cur = pos; continue;
    case 155:
      if(str[cur] === 12467 && str[cur+1] === 12483 && str[cur+2] === 12481) return true;
      if(str[cur] === 12474 && str[cur+1] === 12497 && str[cur+2] === 12473) return true;
      if(str[cur] === 12463 && str[cur+1] === 12479 && str[cur+2] === 12473) return true;
      pos++; cur = pos; continue;
    case 156:
      if(str[cur] === 12521) {
        state = 157;
        cur += 1;
        continue;
      }
      if(str[cur] === 12524) {
        state = 159;
        cur += 1;
        continue;
      }
      pos++; cur = pos; continue;
    case 157:
      if(str[cur] === 12452) {
        state = 158;
        cur += 1;
        continue;
      }
      if(str[cur] === 12531 && str[cur+1] === 12502 && str[cur+2] === 12523) return true;
      if(str[cur] === 12456 && str[cur+1] === 12490) return true;
      if(str[cur] === 12540 && str[cur+1] === 12489 && str[cur+2] === 12531) return true;
      pos++; cur = pos; continue;
    case 158:
      if(str[cur] === 12458 && str[cur+1] === 12531) return true;
      if(str[cur] === 12460 && str[cur+1] === 12540) return true;
      pos++; cur = pos; continue;
    case 159:
      if(str[cur] === 12452 && str[cur+1] === 12471 && str[cur+2] === 12450) return true;
      if(str[cur] === 12483 && str[cur+1] === 12464 && str[cur+2] === 12523) return true;
      pos++; cur = pos; continue;
    case 160:
      if(str[cur] === 12481 && str[cur+1] === 12491 && str[cur+2] === 12531) return true;
      if(str[cur] === 12508 && str[cur+1] === 12484 && str[cur+2] === 12508) return true;
      pos++; cur = pos; continue;
    case 161:
      if(str[cur] === 12521 && str[cur+1] === 12463 && str[cur+2] === 12525 && str[cur+3] === 12473) return true;
      if(str[cur] === 12523 && str[cur+1] === 12460 && str[cur+2] === 12540) return true;
      if(str[cur] === 12452 && str[cur+1] === 12460 && str[cur+2] === 12491) return true;
      pos++; cur = pos; continue;
    case 162:
      if(str[cur] === 12459 && str[cur+1] === 12491 && str[cur+2] === 12531) return true;
      if(str[cur] === 12509 && str[cur+1] === 12454 && str[cur+2] === 12458) return true;
      pos++; cur = pos; continue;
    case 163:
      if(str[cur] === 12473 && str[cur+1] === 12468 && str[cur+2] === 12489 && str[cur+3] === 12521) return true;
      if(str[cur] === 12540 && str[cur+1] === 12510 && str[cur+2] === 12531 && str[cur+3] === 12480) return true;
      pos++; cur = pos; continue;
    default: throw new Exception('Unknown state: '+state);
  }
  return false;
};
