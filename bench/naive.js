module.exports=function(orig_str){
  const length = orig_str.length;
  let str = new Array(length);
  for(let i=0;i < length;i++) {
    str[i] = orig_str.charCodeAt(i);
  }
  for(let pos = 0; pos < length; pos++) {
    if(str[pos] === 12501) {
      if(str[pos+1] === 12471 && str[pos+2] === 12462) {
        if(str[pos+3] === 12477 && str[pos+4] === 12454) return true;
        if(str[pos+3] === 12480 && str[pos+4] === 12493) return true;
        if(str[pos+3] === 12496 && str[pos+4] === 12490) return true;
        continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12487 && str[pos+3] === 12451 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12470 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12449 && str[pos+2] === 12452 && str[pos+3] === 12516 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12457 && str[pos+2] === 12524 && str[pos+3] === 12488 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12452 && str[pos+3] === 12468 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12525 && str[pos+2] === 12540 && str[pos+3] === 12476 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12527) {
        if(str[pos+2] === 12521 && str[pos+3] === 12452 && str[pos+4] === 12489) return true;
        if(str[pos+2] === 12531 && str[pos+3] === 12486) return true;
        continue;
      }
      if(str[pos+1] === 12459 && str[pos+2] === 12510 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12451 && str[pos+2] === 12458 && str[pos+3] === 12493) return true;
      continue;
    }
    if(str[pos] === 12498) {
      if(str[pos+1] === 12488) {
        if(str[pos+2] === 12459 && str[pos+3] === 12466) return true;
        if(str[pos+2] === 12487 && str[pos+3] === 12510 && str[pos+4] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12494 && str[pos+2] === 12450 && str[pos+3] === 12521 && str[pos+4] === 12471) return true;
      if(str[pos+1] === 12510 && str[pos+2] === 12490 && str[pos+3] === 12483 && str[pos+4] === 12484) return true;
      if(str[pos+1] === 12513 && str[pos+2] === 12464 && str[pos+3] === 12510) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12496 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12467 && str[pos+2] === 12470 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12509 && str[pos+2] === 12509 && str[pos+3] === 12479 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12489 && str[pos+3] === 12521 && str[pos+4] === 12531) return true;
      continue;
    }
    if(str[pos] === 12522) {
      if(str[pos+1] === 12470 && str[pos+2] === 12540 && str[pos+3] === 12489) {
        return true;
        if(str[pos+4] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12464 && str[pos+3] === 12510) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12521) return true;
      if(str[pos+1] === 12540) {
        if(str[pos+2] === 12471 && str[pos+3] === 12515 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12501 && str[pos+3] === 12451 && str[pos+4] === 12450) return true;
        continue;
      }
      if(str[pos+1] === 12458 && str[pos+2] === 12523) return true;
      continue;
    }
    if(str[pos] === 12476 && str[pos+1] === 12491 && str[pos+2] === 12460 && str[pos+3] === 12513) return true;
    if(str[pos] === 12459) {
      if(str[pos+1] === 12452) {
        if(str[pos+2] === 12522) {
          if(str[pos+3] === 12461 && str[pos+4] === 12540) return true;
          if(str[pos+3] === 12517 && str[pos+4] === 12540) return true;
          continue;
        }
        if(str[pos+2] === 12525 && str[pos+3] === 12473) return true;
        if(str[pos+2] === 12458 && str[pos+3] === 12540 && str[pos+4] === 12460) return true;
        continue;
      }
      if(str[pos+1] === 12513) {
        if(str[pos+2] === 12483 && str[pos+3] === 12463 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12540 && str[pos+3] === 12523) return true;
        continue;
      }
      if(str[pos+1] === 12514 && str[pos+2] === 12493 && str[pos+3] === 12462) return true;
      if(str[pos+1] === 12521) {
        if(str[pos+2] === 12459 && str[pos+3] === 12521) return true;
        if(str[pos+2] === 12469 && str[pos+3] === 12522 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12490 && str[pos+3] === 12463 && str[pos+4] === 12471) return true;
        continue;
      }
      if(str[pos+1] === 12502 && str[pos+2] === 12488) {
        return true;
        if(str[pos+3] === 12503 && str[pos+4] === 12473) return true;
        continue;
      }
      if(str[pos+1] === 12499 && str[pos+2] === 12468 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12509 && str[pos+2] === 12456 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12524 && str[pos+3] === 12458 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12466 && str[pos+2] === 12508 && str[pos+3] === 12454 && str[pos+4] === 12474) return true;
      if(str[pos+1] === 12496 && str[pos+2] === 12523 && str[pos+3] === 12489 && str[pos+4] === 12531) return true;
      continue;
    }
    if(str[pos] === 12461) {
      if(str[pos+1] === 12515) {
        if(str[pos+2] === 12479 && str[pos+3] === 12500 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12514 && str[pos+3] === 12513) return true;
        continue;
      }
      if(str[pos+1] === 12517 && str[pos+2] === 12454 && str[pos+3] === 12467 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12464) {
        if(str[pos+3] === 12489 && str[pos+4] === 12521) return true;
        if(str[pos+3] === 12521 && str[pos+4] === 12540) return true;
        continue;
      }
      if(str[pos+1] === 12524 && str[pos+2] === 12452 && str[pos+3] === 12495 && str[pos+4] === 12490) return true;
      if(str[pos+1] === 12510 && str[pos+2] === 12527 && str[pos+3] === 12522) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12531 && str[pos+3] === 12522 && str[pos+4] === 12461) return true;
      if(str[pos+1] === 12514 && str[pos+2] === 12522) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12522 && str[pos+3] === 12450) return true;
      if(str[pos+1] === 12494) {
        if(str[pos+2] === 12460 && str[pos+3] === 12483 && str[pos+4] === 12469) return true;
        if(str[pos+2] === 12467 && str[pos+3] === 12467) return true;
        continue;
      }
      if(str[pos+1] === 12496 && str[pos+2] === 12491 && str[pos+3] === 12450) return true;
      continue;
    }
    if(str[pos] === 12488) {
      if(str[pos+1] === 12469 && str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12488) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12531 && str[pos+3] === 12475 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12466) {
        if(str[pos+2] === 12481 && str[pos+3] === 12483 && str[pos+4] === 12463) return true;
        if(str[pos+2] === 12500 && str[pos+3] === 12540) return true;
        if(str[pos+2] === 12461 && str[pos+3] === 12483 && str[pos+4] === 12473) return true;
        continue;
      }
      if(str[pos+1] === 12525 && str[pos+2] === 12500 && str[pos+3] === 12454 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12489) {
        if(str[pos+2] === 12464 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12476 && str[pos+3] === 12523 && str[pos+4] === 12460) return true;
        continue;
      }
      if(str[pos+1] === 12522) {
        if(str[pos+2] === 12487 && str[pos+3] === 12503 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12488 && str[pos+3] === 12489 && str[pos+4] === 12531) return true;
        continue;
      }
      continue;
    }
    if(str[pos] === 12496) {
      if(str[pos+1] === 12479 && str[pos+2] === 12501 && str[pos+3] === 12522 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12516 && str[pos+3] === 12540 && str[pos+4] === 12489) return true;
      if(str[pos+1] === 12463) {
        if(str[pos+2] === 12458 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
        if(str[pos+2] === 12501 && str[pos+3] === 12540 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12540 && str[pos+3] === 12480) return true;
        continue;
      }
      if(str[pos+1] === 12523) {
        if(str[pos+2] === 12461 && str[pos+3] === 12540) return true;
        if(str[pos+2] === 12499 && str[pos+3] === 12540 && str[pos+4] === 12488) return true;
        continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12462 && str[pos+3] === 12521 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12471 && str[pos+2] === 12515 && str[pos+3] === 12540 && str[pos+4] === 12514) return true;
      if(str[pos+1] === 12493 && str[pos+2] === 12502 && str[pos+3] === 12540) return true;
      continue;
    }
    if(str[pos] === 12499) {
      if(str[pos+1] === 12522 && str[pos+2] === 12522 && str[pos+3] === 12480 && str[pos+4] === 12510) return true;
      if(str[pos+1] === 12540) {
        if(str[pos+2] === 12480 && str[pos+3] === 12523) return true;
        if(str[pos+2] === 12489 && str[pos+3] === 12523) return true;
        if(str[pos+2] === 12463 && str[pos+3] === 12452 && str[pos+4] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12502 && str[pos+2] === 12521 && str[pos+3] === 12540 && str[pos+4] === 12496) return true;
      if(str[pos+1] === 12483 && str[pos+2] === 12497) return true;
      continue;
    }
    if(str[pos] === 12467) {
      if(str[pos+1] === 12463 && str[pos+2] === 12540 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12483 && str[pos+3] === 12479) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12497 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12480 && str[pos+2] === 12483 && str[pos+3] === 12463) return true;
      if(str[pos+1] === 12452) {
        if(str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
        if(str[pos+2] === 12523) return true;
        continue;
      }
      if(str[pos+1] === 12494 && str[pos+2] === 12495 && str[pos+3] === 12490) return true;
      if(str[pos+1] === 12467 && str[pos+2] === 12489 && str[pos+3] === 12521) return true;
      if(str[pos+1] === 12489 && str[pos+2] === 12521) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12479 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12514 && str[pos+2] === 12523 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12525) {
        if(str[pos+2] === 12488 && str[pos+3] === 12483 && str[pos+4] === 12463) return true;
        if(str[pos+2] === 12508 && str[pos+3] === 12540 && str[pos+4] === 12471) return true;
        continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12531 && str[pos+3] === 12463) return true;
      continue;
    }
    if(str[pos] === 12473) {
      if(str[pos+1] === 12500 && str[pos+2] === 12450 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12540) {
        if(str[pos+3] === 12497 && str[pos+4] === 12540) return true;
        if(str[pos+3] === 12503) return true;
        continue;
      }
      if(str[pos+1] === 12479 && str[pos+2] === 12540 && str[pos+3] === 12511 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12488 && str[pos+2] === 12521 && str[pos+3] === 12452 && str[pos+4] === 12463) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12463 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12496 && str[pos+2] === 12513) return true;
      if(str[pos+1] === 12508 && str[pos+2] === 12511 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12459) {
        if(str[pos+2] === 12479 && str[pos+3] === 12531 && str[pos+4] === 12463) return true;
        if(str[pos+2] === 12531 && str[pos+3] === 12503 && str[pos+4] === 12540) return true;
        continue;
      }
      if(str[pos+1] === 12467 && str[pos+2] === 12523 && str[pos+3] === 12500) return true;
      continue;
    }
    if(str[pos] === 12509) {
      if(str[pos+1] === 12483) {
        if(str[pos+2] === 12481 && str[pos+3] === 12515 && str[pos+4] === 12510) return true;
        if(str[pos+2] === 12509) return true;
        if(str[pos+2] === 12479 && str[pos+3] === 12452 && str[pos+4] === 12471) return true;
        continue;
      }
      if(str[pos+1] === 12491 && str[pos+2] === 12540 && str[pos+3] === 12479) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12468 && str[pos+3] === 12531) {
        return true;
        if(str[pos+4] === 50) return true;
        if(str[pos+4] === 90) return true;
        continue;
      }
      if(str[pos+1] === 12509 && str[pos+2] === 12483 && str[pos+3] === 12467) return true;
      if(str[pos+1] === 12481 && str[pos+2] === 12456 && str[pos+3] === 12490) return true;
      if(str[pos+1] === 12527 && str[pos+2] === 12523 && str[pos+3] === 12531) return true;
      continue;
    }
    if(str[pos] === 12500) {
      if(str[pos+1] === 12459 && str[pos+2] === 12481 && str[pos+3] === 12517 && str[pos+4] === 12454) return true;
      if(str[pos+1] === 12472 && str[pos+2] === 12519) {
        if(str[pos+3] === 12483 && str[pos+4] === 12488) return true;
        if(str[pos+3] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12500) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12471 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12481 && str[pos+2] === 12517 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12451) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12503 && str[pos+3] === 12463) return true;
      continue;
    }
    if(str[pos] === 12521) {
      if(str[pos+1] === 12452) {
        if(str[pos+2] === 12467 && str[pos+3] === 12454) return true;
        if(str[pos+2] === 12481 && str[pos+3] === 12517 && str[pos+4] === 12454) return true;
        if(str[pos+2] === 12508 && str[pos+3] === 12523 && str[pos+4] === 12488) return true;
        continue;
      }
      if(str[pos+1] === 12483) {
        if(str[pos+2] === 12461 && str[pos+3] === 12540) return true;
        if(str[pos+2] === 12479) return true;
        continue;
      }
      if(str[pos+1] === 12501 && str[pos+2] === 12524 && str[pos+3] === 12471 && str[pos+4] === 12450) return true;
      if(str[pos+1] === 12503 && str[pos+2] === 12521 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12479 && str[pos+3] === 12540 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12464 && str[pos+2] === 12521 && str[pos+3] === 12540 && str[pos+4] === 12472) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12488 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12521 && str[pos+3] === 12452) return true;
      if(str[pos+1] === 12502 && str[pos+2] === 12459 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12486 && str[pos+2] === 12451) {
        if(str[pos+3] === 12450 && str[pos+4] === 12473) return true;
        if(str[pos+3] === 12458 && str[pos+4] === 12473) return true;
        continue;
      }
      if(str[pos+1] === 12512 && str[pos+2] === 12497 && str[pos+3] === 12523 && str[pos+4] === 12489) return true;
      continue;
    }
    if(str[pos] === 12458) {
      if(str[pos+1] === 12467 && str[pos+2] === 12522 && str[pos+3] === 12470 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12491) {
        if(str[pos+2] === 12473 && str[pos+3] === 12474 && str[pos+4] === 12513) return true;
        if(str[pos+2] === 12489 && str[pos+3] === 12522 && str[pos+4] === 12523) return true;
        if(str[pos+2] === 12468 && str[pos+3] === 12540 && str[pos+4] === 12522) return true;
        continue;
      }
      if(str[pos+1] === 12512) {
        if(str[pos+2] === 12473 && str[pos+3] === 12479 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12490 && str[pos+3] === 12452 && str[pos+4] === 12488) return true;
        continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12480 && str[pos+3] === 12452 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12479 && str[pos+2] === 12481) return true;
      if(str[pos+1] === 12458) {
        if(str[pos+2] === 12473 && str[pos+3] === 12496 && str[pos+4] === 12513) return true;
        if(str[pos+2] === 12479 && str[pos+3] === 12481) return true;
        continue;
      }
      if(str[pos+1] === 12463 && str[pos+2] === 12479 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12489 && str[pos+2] === 12471 && str[pos+3] === 12471) return true;
      continue;
    }
    if(str[pos] === 12450) {
      if(str[pos+1] === 12474 && str[pos+2] === 12510 && str[pos+3] === 12458 && str[pos+4] === 12454) return true;
      if(str[pos+1] === 12540) {
        if(str[pos+2] === 12508) {
          return true;
          if(str[pos+3] === 12483 && str[pos+4] === 12463) return true;
          continue;
        }
        if(str[pos+2] === 12510 && str[pos+3] === 12523 && str[pos+4] === 12489) return true;
        continue;
      }
      if(str[pos+1] === 12522) {
        if(str[pos+2] === 12450 && str[pos+3] === 12489 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12466 && str[pos+3] === 12452 && str[pos+4] === 12484) return true;
        continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12494 && str[pos+3] === 12540 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12481 && str[pos+2] === 12515 && str[pos+3] === 12514) return true;
      if(str[pos+1] === 12466 && str[pos+2] === 12495 && str[pos+3] === 12531 && str[pos+4] === 12488) return true;
      if(str[pos+1] === 12513) {
        if(str[pos+2] === 12479 && str[pos+3] === 12510) return true;
        if(str[pos+2] === 12514 && str[pos+3] === 12540 && str[pos+4] === 12473) return true;
        continue;
      }
      if(str[pos+1] === 12469 && str[pos+2] === 12490 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12494 && str[pos+2] === 12503 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12502 && str[pos+2] === 12477 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12464 && str[pos+2] === 12494 && str[pos+3] === 12512) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12475 && str[pos+3] === 12454 && str[pos+4] === 12473) return true;
      continue;
    }
    if(str[pos] === 12469) {
      if(str[pos+1] === 12527 && str[pos+2] === 12512 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12531) {
        if(str[pos+2] === 12480 && str[pos+3] === 12540) {
          return true;
          if(str[pos+4] === 12473) return true;
          continue;
        }
        if(str[pos+2] === 12489) {
          return true;
          if(str[pos+3] === 12497 && str[pos+4] === 12531) return true;
          continue;
        }
        continue;
      }
      if(str[pos+1] === 12452) {
        if(str[pos+2] === 12489 && str[pos+3] === 12531) return true;
        if(str[pos+2] === 12507 && str[pos+3] === 12540 && str[pos+4] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12491 && str[pos+2] === 12540 && str[pos+3] === 12468) return true;
      if(str[pos+1] === 12490 && str[pos+2] === 12462 && str[pos+3] === 12521 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12490 && str[pos+3] === 12452 && str[pos+4] === 12488) return true;
      if(str[pos+1] === 12513 && str[pos+2] === 12495 && str[pos+3] === 12480 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12508 && str[pos+2] === 12493 && str[pos+3] === 12450) return true;
      if(str[pos+1] === 12510 && str[pos+2] === 12520 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12521 && str[pos+3] === 12499 && str[pos+4] === 12473) return true;
      continue;
    }
    if(str[pos] === 12491) {
      if(str[pos+1] === 12489) {
        if(str[pos+2] === 12521 && str[pos+3] === 12531) {
          if(str[pos+4] === 9792) return true;
          if(str[pos+4] === 9794) return true;
          continue;
        }
        if(str[pos+2] === 12522 && str[pos+3] === 12540) {
          if(str[pos+4] === 12490) return true;
          if(str[pos+4] === 12494) return true;
          continue;
        }
        if(str[pos+2] === 12463 && str[pos+3] === 12452 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
        continue;
      }
      if(str[pos+1] === 12515) {
        if(str[pos+2] === 12523 && str[pos+3] === 12510 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12540 && str[pos+3] === 12473) return true;
        continue;
      }
      if(str[pos+1] === 12519 && str[pos+2] === 12525) {
        if(str[pos+3] === 12478) return true;
        if(str[pos+3] === 12514) return true;
        if(str[pos+3] === 12508 && str[pos+4] === 12531) return true;
        if(str[pos+3] === 12488 && str[pos+4] === 12494) return true;
        continue;
      }
      if(str[pos+1] === 12517 && str[pos+2] === 12540 && str[pos+3] === 12521) return true;
      continue;
    }
    if(str[pos] === 12525) {
      if(str[pos+1] === 12467 && str[pos+2] === 12531) return true;
      if(str[pos+1] === 12476 && str[pos+2] === 12522 && str[pos+3] === 12450) return true;
      if(str[pos+1] === 12474 && str[pos+2] === 12524 && str[pos+3] === 12452 && str[pos+4] === 12489) return true;
      if(str[pos+1] === 12488 && str[pos+2] === 12512) return true;
      continue;
    }
    if(str[pos] === 12503) {
      if(str[pos+1] === 12463 && str[pos+2] === 12522 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12531) return true;
      if(str[pos+1] === 12486 && str[pos+2] === 12521) return true;
      if(str[pos+1] === 12503 && str[pos+2] === 12522 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12473 && str[pos+3] === 12523) return true;
      continue;
    }
    if(str[pos] === 12474) {
      if(str[pos+1] === 12460 && str[pos+2] === 12452 && str[pos+3] === 12489 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12496 && str[pos+2] === 12483 && str[pos+3] === 12488) return true;
      continue;
    }
    if(str[pos] === 12468) {
      if(str[pos+1] === 12523) {
        if(str[pos+2] === 12480 && str[pos+3] === 12483 && str[pos+4] === 12463) return true;
        if(str[pos+2] === 12496 && str[pos+3] === 12483 && str[pos+4] === 12488) return true;
        continue;
      }
      if(str[pos+1] === 12540) {
        if(str[pos+2] === 12473) {
          return true;
          if(str[pos+3] === 12488) return true;
          continue;
        }
        if(str[pos+2] === 12522 && str[pos+3] === 12461 && str[pos+4] === 12540) return true;
        continue;
      }
      if(str[pos+1] === 12525 && str[pos+2] === 12540) {
        if(str[pos+3] === 12491 && str[pos+4] === 12515) return true;
        if(str[pos+3] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12510 && str[pos+2] === 12478 && str[pos+3] === 12454) return true;
      if(str[pos+1] === 12491 && str[pos+2] === 12519 && str[pos+3] === 12491 && str[pos+4] === 12519) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12522 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12454 && str[pos+2] === 12459 && str[pos+3] === 12470 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12505) return true;
      continue;
    }
    if(str[pos] === 12490) {
      if(str[pos+1] === 12478 && str[pos+2] === 12494 && str[pos+3] === 12463 && str[pos+4] === 12469) return true;
      if(str[pos+1] === 12483) {
        if(str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12471 && str[pos+3] === 12540) return true;
        continue;
      }
      if(str[pos+1] === 12510) {
        if(str[pos+2] === 12465 && str[pos+3] === 12525) return true;
        if(str[pos+2] === 12474 && str[pos+3] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12456 && str[pos+2] === 12488 && str[pos+3] === 12523) return true;
      continue;
    }
    if(str[pos] === 12463) {
      if(str[pos+1] === 12469 && str[pos+2] === 12452 && str[pos+3] === 12495 && str[pos+4] === 12490) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12502) return true;
      if(str[pos+1] === 12525 && str[pos+2] === 12496 && str[pos+3] === 12483 && str[pos+4] === 12488) return true;
      if(str[pos+1] === 12492 && str[pos+2] === 12462 && str[pos+3] === 12480 && str[pos+4] === 12510) return true;
      if(str[pos+1] === 12481 && str[pos+2] === 12540 && str[pos+3] === 12488) return true;
      if(str[pos+1] === 12524 && str[pos+2] === 12475 && str[pos+3] === 12522 && str[pos+4] === 12450) return true;
      continue;
    }
    if(str[pos] === 12497) {
      if(str[pos+1] === 12454 && str[pos+2] === 12527 && str[pos+3] === 12454) return true;
      if(str[pos+1] === 12521) {
        if(str[pos+2] === 12473) return true;
        if(str[pos+2] === 12475 && str[pos+3] === 12463 && str[pos+4] === 12488) return true;
        continue;
      }
      if(str[pos+1] === 12523) {
        if(str[pos+2] === 12461 && str[pos+3] === 12450) return true;
        if(str[pos+2] === 12471 && str[pos+3] === 12455 && str[pos+4] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12481 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12523 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12481 && str[pos+2] === 12522 && str[pos+3] === 12473) return true;
      continue;
    }
    if(str[pos] === 12514) {
      if(str[pos+1] === 12523 && str[pos+2] === 12501 && str[pos+3] === 12457 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12472 && str[pos+3] === 12515 && str[pos+4] === 12521) return true;
      if(str[pos+1] === 12467 && str[pos+2] === 12467) return true;
      if(str[pos+1] === 12454 && str[pos+2] === 12459 && str[pos+3] === 12470 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12472 && str[pos+2] === 12515 && str[pos+3] === 12531 && str[pos+4] === 12508) return true;
      continue;
    }
    if(str[pos] === 12487) {
      if(str[pos+1] === 12451) {
        if(str[pos+2] === 12450 && str[pos+3] === 12523 && str[pos+4] === 12460) return true;
        if(str[pos+2] === 12464 && str[pos+3] === 12480) return true;
        continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12522 && str[pos+3] === 12517 && str[pos+4] === 12454) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12496 && str[pos+3] === 12540 && str[pos+4] === 12489) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12499 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12458 && str[pos+2] === 12461 && str[pos+3] === 12471 && str[pos+4] === 12473) return true;
      continue;
    }
    if(str[pos] === 12480) {
      if(str[pos+1] === 12464 && str[pos+2] === 12488 && str[pos+3] === 12522 && str[pos+4] === 12458) return true;
      if(str[pos+1] === 12540) {
        if(str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12452) return true;
        if(str[pos+2] === 12486 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
        continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12496 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12494 && str[pos+3] === 12540 && str[pos+4] === 12474) return true;
      continue;
    }
    if(str[pos] === 12506) {
      if(str[pos+1] === 12522 && str[pos+2] === 12483 && str[pos+3] === 12497 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12471 && str[pos+3] === 12450 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12483 && str[pos+3] === 12503) return true;
      continue;
    }
    if(str[pos] === 12510) {
      if(str[pos+1] === 12480 && str[pos+2] === 12484 && str[pos+3] === 12508 && str[pos+4] === 12511) return true;
      if(str[pos+1] === 12531) {
        if(str[pos+2] === 12461 && str[pos+3] === 12540) return true;
        if(str[pos+2] === 12479 && str[pos+3] === 12452 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12512 && str[pos+3] === 12540) return true;
        continue;
      }
      if(str[pos+1] === 12523) {
        if(str[pos+2] === 12494 && str[pos+3] === 12540 && str[pos+4] === 12512) return true;
        if(str[pos+2] === 12510 && str[pos+3] === 12452 && str[pos+4] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12479 && str[pos+2] === 12489 && str[pos+3] === 12460 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12464) {
        if(str[pos+2] === 12459 && str[pos+3] === 12523 && str[pos+4] === 12468) return true;
        if(str[pos+2] === 12510) {
          if(str[pos+3] === 12483 && str[pos+4] === 12464) return true;
          if(str[pos+3] === 12521 && str[pos+4] === 12471) return true;
          continue;
        }
        continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12523) {
        return true;
        if(str[pos+3] === 12522) return true;
        continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12473 && str[pos+3] === 12464 && str[pos+4] === 12510) return true;
      if(str[pos+1] === 12518 && str[pos+2] === 12523 && str[pos+3] === 12489) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12494 && str[pos+3] === 12471 && str[pos+4] === 12479) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12490 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12493 && str[pos+2] === 12493) return true;
      if(str[pos+1] === 12473 && str[pos+2] === 12461 && str[pos+3] === 12483 && str[pos+4] === 12497) return true;
      if(str[pos+1] === 12491 && str[pos+2] === 12517 && str[pos+3] === 12540 && str[pos+4] === 12521) return true;
      if(str[pos+1] === 12490 && str[pos+2] === 12501 && str[pos+3] === 12451) return true;
      continue;
    }
    if(str[pos] === 12460) {
      if(str[pos+1] === 12521 && str[pos+2] === 12460 && str[pos+3] === 12521) return true;
      if(str[pos+1] === 12540) {
        if(str[pos+2] === 12487 && str[pos+3] === 12451) return true;
        if(str[pos+2] === 12513 && str[pos+3] === 12452 && str[pos+4] === 12523) return true;
        continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12540 && str[pos+3] === 12521) return true;
      if(str[pos+1] === 12496 && str[pos+2] === 12452 && str[pos+3] === 12488) return true;
      if(str[pos+1] === 12502 && str[pos+2] === 12522 && str[pos+3] === 12450 && str[pos+4] === 12473) return true;
      continue;
    }
    if(str[pos] === 12454) {
      if(str[pos+1] === 12452 && str[pos+2] === 12531 && str[pos+3] === 12487 && str[pos+4] === 12451) return true;
      if(str[pos+1] === 12484) {
        if(str[pos+2] === 12489 && str[pos+3] === 12531) return true;
        if(str[pos+2] === 12508 && str[pos+3] === 12483 && str[pos+4] === 12488) return true;
        continue;
      }
      if(str[pos+1] === 12477) {
        if(str[pos+2] === 12483 && str[pos+3] === 12461 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12495 && str[pos+3] === 12481) return true;
        continue;
      }
      if(str[pos+1] === 12497 && str[pos+2] === 12540) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12512 && str[pos+3] === 12540) return true;
      continue;
    }
    if(str[pos] === 12465) {
      if(str[pos+1] === 12531 && str[pos+2] === 12479 && str[pos+3] === 12525 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12471 && str[pos+3] === 12451) return true;
      if(str[pos+1] === 12512 && str[pos+2] === 12483 && str[pos+3] === 12477) return true;
      if(str[pos+1] === 12483 && str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12467 && str[pos+3] === 12454 && str[pos+4] === 12458) return true;
      continue;
    }
    if(str[pos] === 12518) {
      if(str[pos+1] === 12524 && str[pos+2] === 12452 && str[pos+3] === 12489 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12466 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12461) {
        if(str[pos+2] === 12459 && str[pos+3] === 12502 && str[pos+4] === 12522) return true;
        if(str[pos+2] === 12527 && str[pos+3] === 12521 && str[pos+4] === 12471) return true;
        if(str[pos+2] === 12494 && str[pos+3] === 12458 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12513 && str[pos+3] === 12494 && str[pos+4] === 12467) return true;
        continue;
      }
      if(str[pos+1] === 12463 && str[pos+2] === 12471 && str[pos+3] === 12540) return true;
      continue;
    }
    if(str[pos] === 12527) {
      if(str[pos+1] === 12491 && str[pos+2] === 12494 && str[pos+3] === 12467) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12522 && str[pos+3] === 12461 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12479 && str[pos+2] === 12483 && str[pos+3] === 12467) return true;
      if(str[pos+1] === 12459 && str[pos+2] === 12471 && str[pos+3] === 12515 && str[pos+4] === 12514) return true;
      continue;
    }
    if(str[pos] === 12513) {
      if(str[pos+1] === 12479) {
        if(str[pos+2] === 12514 && str[pos+3] === 12531) return true;
        if(str[pos+2] === 12531 && str[pos+3] === 12464) return true;
        if(str[pos+2] === 12464 && str[pos+3] === 12525 && str[pos+4] === 12473) return true;
        continue;
      }
      if(str[pos+1] === 12494 && str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12466) return true;
      if(str[pos+1] === 12460) {
        if(str[pos+2] === 12491 && str[pos+3] === 12454 && str[pos+4] === 12512) return true;
        if(str[pos+2] === 12516 && str[pos+3] === 12531 && str[pos+4] === 12510) return true;
        continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12503) return true;
      continue;
    }
    if(str[pos] === 12489) {
      if(str[pos+1] === 12463) {
        if(str[pos+2] === 12463 && str[pos+3] === 12521 && str[pos+4] === 12466) return true;
        if(str[pos+2] === 12465 && str[pos+3] === 12452 && str[pos+4] === 12523) return true;
        if(str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12464) return true;
        continue;
      }
      if(str[pos+1] === 12540) {
        if(str[pos+2] === 12489) {
          if(str[pos+3] === 12522 && str[pos+4] === 12458) return true;
          if(str[pos+3] === 12540) return true;
          continue;
        }
        if(str[pos+2] === 12502 && str[pos+3] === 12523) return true;
        if(str[pos+2] === 12511 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12479 && str[pos+3] === 12463 && str[pos+4] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12460 && str[pos+2] === 12540 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12531) {
        if(str[pos+2] === 12501 && str[pos+3] === 12449 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12513 && str[pos+3] === 12523) return true;
        if(str[pos+2] === 12459 && str[pos+3] === 12521 && str[pos+4] === 12473) return true;
        continue;
      }
      if(str[pos+1] === 12468 && str[pos+2] === 12540 && str[pos+3] === 12512) return true;
      if(str[pos+1] === 12472 && str[pos+2] === 12519 && str[pos+3] === 12483 && str[pos+4] === 12481) return true;
      if(str[pos+1] === 12479 && str[pos+2] === 12452 && str[pos+3] === 12488 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12500 && str[pos+3] === 12458 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12469 && str[pos+2] === 12452 && str[pos+3] === 12489 && str[pos+4] === 12531) return true;
      continue;
    }
    if(str[pos] === 12452) {
      if(str[pos+1] === 12471 && str[pos+2] === 12484 && str[pos+3] === 12502 && str[pos+4] === 12486) return true;
      if(str[pos+1] === 12527 && str[pos+2] === 12540 && str[pos+3] === 12463) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12502 && str[pos+3] === 12452) return true;
      if(str[pos+1] === 12488 && str[pos+2] === 12510 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12494 && str[pos+2] === 12512 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12511 && str[pos+3] === 12540 && str[pos+4] === 12476) return true;
      continue;
    }
    if(str[pos] === 12462) {
      if(str[pos+1] === 12515) {
        if(str[pos+2] === 12521 && str[pos+3] === 12489 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12503) return true;
        continue;
      }
      if(str[pos+1] === 12521 && str[pos+2] === 12486 && str[pos+3] === 12451 && str[pos+4] === 12490) return true;
      continue;
    }
    if(str[pos] === 12516) {
      if(str[pos+1] === 12489) {
        if(str[pos+2] === 12521 && str[pos+3] === 12531) return true;
        if(str[pos+2] === 12531) return true;
        if(str[pos+2] === 12461 && str[pos+3] === 12531 && str[pos+4] === 12464) return true;
        continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12516 && str[pos+3] === 12531 && str[pos+4] === 12510) return true;
      if(str[pos+1] === 12511) {
        if(str[pos+2] === 12459 && str[pos+3] === 12521 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12521 && str[pos+3] === 12511) return true;
        continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12461 && str[pos+3] === 12514 && str[pos+4] === 12494) return true;
      if(str[pos+1] === 12472 && str[pos+2] === 12525 && str[pos+3] === 12531) return true;
      continue;
    }
    if(str[pos] === 12524) {
      if(str[pos+1] === 12450 && str[pos+2] === 12467 && str[pos+3] === 12452 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12487 && str[pos+2] === 12451) {
        if(str[pos+3] === 12450 && str[pos+4] === 12531) return true;
        if(str[pos+3] === 12496) return true;
        continue;
      }
      if(str[pos+1] === 12472) {
        if(str[pos+2] === 12450 && str[pos+3] === 12452 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12463) return true;
        if(str[pos+2] === 12473 && str[pos+3] === 12481 && str[pos+4] === 12523) return true;
        if(str[pos+2] === 12462 && str[pos+3] === 12460 && str[pos+4] === 12473) return true;
        continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12463 && str[pos+3] === 12454 && str[pos+4] === 12470) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12488 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
      continue;
    }
    if(str[pos] === 12472) {
      if(str[pos+1] === 12464 && str[pos+2] === 12470 && str[pos+3] === 12464 && str[pos+4] === 12510) return true;
      if(str[pos+1] === 12517) {
        if(str[pos+2] === 12468 && str[pos+3] === 12531) return true;
        if(str[pos+2] === 12503 && str[pos+3] === 12488 && str[pos+4] === 12523) return true;
        if(str[pos+2] === 12459 && str[pos+3] === 12452 && str[pos+4] === 12531) return true;
        if(str[pos+2] === 12506 && str[pos+3] === 12483 && str[pos+4] === 12479) return true;
        continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12521 && str[pos+3] === 12531 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12521 && str[pos+2] === 12540 && str[pos+3] === 12481) return true;
      if(str[pos+1] === 12496 && str[pos+2] === 12467 && str[pos+3] === 12452 && str[pos+4] === 12523) return true;
      continue;
    }
    if(str[pos] === 12505) {
      if(str[pos+1] === 12488 && str[pos+2] === 12505) {
        if(str[pos+3] === 12479 && str[pos+4] === 12540) return true;
        if(str[pos+3] === 12488 && str[pos+4] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12525) {
        if(str[pos+2] === 12505 && str[pos+3] === 12523 && str[pos+4] === 12488) return true;
        if(str[pos+2] === 12522 && str[pos+3] === 12531 && str[pos+4] === 12460) return true;
        continue;
      }
      if(str[pos+1] === 12452 && str[pos+2] === 12522 && str[pos+3] === 12540 && str[pos+4] === 12501) return true;
      continue;
    }
    if(str[pos] === 12471) {
      if(str[pos+1] === 12455) {
        if(str[pos+2] === 12452 && str[pos+3] === 12511) return true;
        if(str[pos+2] === 12523 && str[pos+3] === 12480 && str[pos+4] === 12540) return true;
        continue;
      }
      if(str[pos+1] === 12540 && str[pos+2] === 12489 && str[pos+3] === 12521) return true;
      if(str[pos+1] === 12515 && str[pos+2] === 12527 && str[pos+3] === 12540 && str[pos+4] === 12474) return true;
      if(str[pos+1] === 12470 && str[pos+2] === 12522 && str[pos+3] === 12460 && str[pos+4] === 12540) return true;
      continue;
    }
    if(str[pos] === 12466 && str[pos+1] === 12531 && str[pos+2] === 12460 && str[pos+3] === 12540) return true;
    if(str[pos] === 12479) {
      if(str[pos+1] === 12483 && str[pos+2] === 12484 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12510) {
        if(str[pos+2] === 12470 && str[pos+3] === 12521 && str[pos+4] === 12471) return true;
        if(str[pos+2] === 12479 && str[pos+3] === 12510) return true;
        if(str[pos+2] === 12531 && str[pos+3] === 12479) return true;
        continue;
      }
      if(str[pos+1] === 12493 && str[pos+2] === 12508 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12484 && str[pos+2] === 12505 && str[pos+3] === 12452) return true;
      if(str[pos+1] === 12486 && str[pos+2] === 12488 && str[pos+3] === 12503 && str[pos+4] === 12473) return true;
      continue;
    }
    if(str[pos] === 12456) {
      if(str[pos+1] === 12499 && str[pos+2] === 12527 && str[pos+3] === 12521 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12524) {
        if(str[pos+2] === 12461) {
          if(str[pos+3] === 12483 && str[pos+4] === 12489) return true;
          if(str[pos+3] === 12502 && str[pos+4] === 12523) return true;
          continue;
        }
        if(str[pos+2] === 12502 && str[pos+3] === 12540) return true;
        continue;
      }
      if(str[pos+1] === 12452 && str[pos+2] === 12497 && str[pos+3] === 12512) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12501 && str[pos+3] === 12451) return true;
      if(str[pos+1] === 12450 && str[pos+2] === 12540 && str[pos+3] === 12512 && str[pos+4] === 12489) return true;
      if(str[pos+1] === 12531) {
        if(str[pos+2] === 12486 && str[pos+3] === 12452) return true;
        if(str[pos+2] === 12506 && str[pos+3] === 12523 && str[pos+4] === 12488) return true;
        continue;
      }
      if(str[pos+1] === 12493 && str[pos+2] === 12467) {
        return true;
        if(str[pos+3] === 12525 && str[pos+4] === 12525) return true;
        continue;
      }
      if(str[pos+1] === 12486 && str[pos+2] === 12508 && str[pos+3] === 12540 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12524 && str[pos+3] === 12452 && str[pos+4] === 12489) return true;
      if(str[pos+1] === 12512 && str[pos+2] === 12522 && str[pos+3] === 12483 && str[pos+4] === 12488) return true;
      continue;
    }
    if(str[pos] === 12523) {
      if(str[pos+1] === 12462 && str[pos+2] === 12450) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12472 && str[pos+3] === 12517 && str[pos+4] === 12521) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12497 && str[pos+3] === 12483 && str[pos+4] === 12497) return true;
      if(str[pos+1] === 12522 && str[pos+2] === 12522) return true;
      if(str[pos+1] === 12490 && str[pos+2] === 12488 && str[pos+3] === 12540 && str[pos+4] === 12531) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12471 && str[pos+3] === 12458) return true;
      if(str[pos+1] === 12459 && str[pos+2] === 12522 && str[pos+3] === 12458) return true;
      continue;
    }
    if(str[pos] === 12502) {
      if(str[pos+1] === 12521 && str[pos+2] === 12483 && str[pos+3] === 12461 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12540) {
        if(str[pos+2] === 12473 && str[pos+3] === 12479 && str[pos+4] === 12540) return true;
        if(str[pos+2] === 12496 && str[pos+3] === 12540) {
          return true;
          if(str[pos+4] === 12531) return true;
          continue;
        }
        if(str[pos+2] === 12500 && str[pos+3] === 12483 && str[pos+4] === 12464) return true;
        continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12540) return true;
      if(str[pos+1] === 12499 && str[pos+2] === 12451) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12476 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12491 && str[pos+2] === 12515 && str[pos+3] === 12483 && str[pos+4] === 12488) return true;
      continue;
    }
    if(str[pos] === 12511) {
      if(str[pos+1] === 12491 && str[pos+2] === 12522 && str[pos+3] === 12517 && str[pos+4] === 12454) return true;
      if(str[pos+1] === 12517 && str[pos+2] === 12454) {
        return true;
        if(str[pos+3] === 12484 && str[pos+4] === 12540) return true;
        continue;
      }
      if(str[pos+1] === 12523 && str[pos+2] === 12479 && str[pos+3] === 12531 && str[pos+4] === 12463) return true;
      if(str[pos+1] === 12474 && str[pos+2] === 12468 && str[pos+3] === 12525 && str[pos+4] === 12454) return true;
      if(str[pos+1] === 12525 && str[pos+2] === 12459 && str[pos+3] === 12525 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12494) {
        if(str[pos+2] === 12510 && str[pos+3] === 12480 && str[pos+4] === 12512) return true;
        if(str[pos+2] === 12512 && str[pos+3] === 12483 && str[pos+4] === 12481) return true;
        continue;
      }
      if(str[pos+1] === 12484 && str[pos+2] === 12495 && str[pos+3] === 12491 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12511 && str[pos+2] === 12525) {
        if(str[pos+3] === 12483 && str[pos+4] === 12503) return true;
        if(str[pos+3] === 12523) return true;
        continue;
      }
      if(str[pos+1] === 12459 && str[pos+2] === 12523 && str[pos+3] === 12466) return true;
      continue;
    }
    if(str[pos] === 12495) {
      if(str[pos+1] === 12463 && str[pos+2] === 12522 && str[pos+3] === 12517 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12493 && str[pos+2] === 12483 && str[pos+3] === 12467) return true;
      if(str[pos+1] === 12460 && str[pos+2] === 12493 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12522) {
        if(str[pos+2] === 12486 && str[pos+3] === 12516 && str[pos+4] === 12510) return true;
        if(str[pos+2] === 12540 && str[pos+3] === 12475 && str[pos+4] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12483 && str[pos+2] === 12469 && str[pos+3] === 12512) return true;
      if(str[pos+1] === 12500 && str[pos+2] === 12490 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12473) {
        if(str[pos+2] === 12502 && str[pos+3] === 12524 && str[pos+4] === 12525) return true;
        if(str[pos+2] === 12508 && str[pos+3] === 12540) return true;
        continue;
      }
      if(str[pos+1] === 12502 && str[pos+2] === 12493 && str[pos+3] === 12540 && str[pos+4] === 12463) return true;
      if(str[pos+1] === 12531 && str[pos+2] === 12486 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12516 && str[pos+2] === 12471 && str[pos+3] === 12460 && str[pos+4] === 12513) return true;
      continue;
    }
    if(str[pos] === 12481) {
      if(str[pos+1] === 12467 && str[pos+2] === 12522 && str[pos+3] === 12540 && str[pos+4] === 12479) return true;
      if(str[pos+1] === 12519 && str[pos+2] === 12531 && str[pos+3] === 12481 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12515 && str[pos+2] === 12540 && str[pos+3] === 12524 && str[pos+4] === 12512) return true;
      if(str[pos+1] === 12523) {
        if(str[pos+2] === 12479 && str[pos+3] === 12522 && str[pos+4] === 12473) return true;
        if(str[pos+2] === 12483 && str[pos+3] === 12488) return true;
        continue;
      }
      if(str[pos+1] === 12522 && str[pos+2] === 12540 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12455 && str[pos+2] === 12522) {
        if(str[pos+3] === 12512) return true;
        if(str[pos+3] === 12531 && str[pos+4] === 12508) return true;
        continue;
      }
      continue;
    }
    if(str[pos] === 12507) {
      if(str[pos+1] === 12454 && str[pos+2] === 12458 && str[pos+3] === 12454) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12507 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12456 && str[pos+2] === 12523) {
        if(str[pos+3] === 12458 && str[pos+4] === 12540) return true;
        if(str[pos+3] === 12467) return true;
        continue;
      }
      continue;
    }
    if(str[pos] === 12520) {
      if(str[pos+1] === 12523 && str[pos+2] === 12494 && str[pos+3] === 12474 && str[pos+4] === 12463) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12462 && str[pos+3] === 12521 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12510 && str[pos+2] === 12527 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12494 && str[pos+2] === 12527 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      continue;
    }
    if(str[pos] === 12493) {
      if(str[pos+1] === 12452 && str[pos+2] === 12486 && str[pos+3] === 12451) {
        return true;
        if(str[pos+4] === 12458) return true;
        continue;
      }
      if(str[pos+1] === 12531 && str[pos+2] === 12489 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12458 && str[pos+2] === 12521 && str[pos+3] === 12531 && str[pos+4] === 12488) return true;
      continue;
    }
    if(str[pos] === 12492) {
      if(str[pos+1] === 12458 && str[pos+2] === 12540) return true;
      if(str[pos+1] === 12510 && str[pos+2] === 12463 && str[pos+3] === 12525 && str[pos+4] === 12540) return true;
      if(str[pos+1] === 12465 && str[pos+2] === 12491 && str[pos+3] === 12531) return true;
      continue;
    }
    if(str[pos] === 12512) {
      if(str[pos+1] === 12454 && str[pos+2] === 12510) {
        return true;
        if(str[pos+3] === 12540 && str[pos+4] === 12472) return true;
        continue;
      }
      if(str[pos+1] === 12481 && str[pos+2] === 12517 && str[pos+3] === 12540 && str[pos+4] === 12523) return true;
      if(str[pos+1] === 12483 && str[pos+2] === 12463 && str[pos+3] === 12523) return true;
      if(str[pos+1] === 12463) {
        if(str[pos+2] === 12496 && str[pos+3] === 12540 && str[pos+4] === 12489) return true;
        if(str[pos+2] === 12507 && str[pos+3] === 12540 && str[pos+4] === 12463) return true;
        continue;
      }
      continue;
    }
    if(str[pos] === 12477) {
      if(str[pos+1] === 12523 && str[pos+2] === 12525 && str[pos+3] === 12483 && str[pos+4] === 12463) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12490) {
        if(str[pos+3] === 12494) return true;
        if(str[pos+3] === 12531 && str[pos+4] === 12473) return true;
        continue;
      }
      continue;
    }
    if(str[pos] === 12494) {
      if(str[pos+1] === 12467 && str[pos+2] === 12483 && str[pos+3] === 12481) return true;
      if(str[pos+1] === 12474 && str[pos+2] === 12497 && str[pos+3] === 12473) return true;
      if(str[pos+1] === 12463 && str[pos+2] === 12479 && str[pos+3] === 12473) return true;
      continue;
    }
    if(str[pos] === 12464) {
      if(str[pos+1] === 12521) {
        if(str[pos+2] === 12452) {
          if(str[pos+3] === 12458 && str[pos+4] === 12531) return true;
          if(str[pos+3] === 12460 && str[pos+4] === 12540) return true;
          continue;
        }
        if(str[pos+2] === 12531 && str[pos+3] === 12502 && str[pos+4] === 12523) return true;
        if(str[pos+2] === 12456 && str[pos+3] === 12490) return true;
        if(str[pos+2] === 12540 && str[pos+3] === 12489 && str[pos+4] === 12531) return true;
        continue;
      }
      if(str[pos+1] === 12524) {
        if(str[pos+2] === 12452 && str[pos+3] === 12471 && str[pos+4] === 12450) return true;
        if(str[pos+2] === 12483 && str[pos+3] === 12464 && str[pos+4] === 12523) return true;
        continue;
      }
      continue;
    }
    if(str[pos] === 12484) {
      if(str[pos+1] === 12481 && str[pos+2] === 12491 && str[pos+3] === 12531) return true;
      if(str[pos+1] === 12508 && str[pos+2] === 12484 && str[pos+3] === 12508) return true;
      continue;
    }
    if(str[pos] === 12504) {
      if(str[pos+1] === 12521 && str[pos+2] === 12463 && str[pos+3] === 12525 && str[pos+4] === 12473) return true;
      if(str[pos+1] === 12523 && str[pos+2] === 12460 && str[pos+3] === 12540) return true;
      if(str[pos+1] === 12452 && str[pos+2] === 12460 && str[pos+3] === 12491) return true;
      continue;
    }
    if(str[pos] === 12486 && str[pos+1] === 12483) {
      if(str[pos+2] === 12459 && str[pos+3] === 12491 && str[pos+4] === 12531) return true;
      if(str[pos+2] === 12509 && str[pos+3] === 12454 && str[pos+4] === 12458) return true;
      continue;
    }
    if(str[pos] === 12475 && str[pos+1] === 12524 && str[pos+2] === 12499 && str[pos+3] === 12451) return true;
    if(str[pos] === 12508) {
      if(str[pos+1] === 12473 && str[pos+2] === 12468 && str[pos+3] === 12489 && str[pos+4] === 12521) return true;
      if(str[pos+1] === 12540 && str[pos+2] === 12510 && str[pos+3] === 12531 && str[pos+4] === 12480) return true;
      continue;
    }
    if(str[pos] === 12470 && str[pos+1] === 12531 && str[pos+2] === 12464 && str[pos+3] === 12540 && str[pos+4] === 12473) return true;
    continue;
  }
  return false;
};
