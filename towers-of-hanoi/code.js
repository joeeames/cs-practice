var towerA = [],
    towerB = [],
    towerC = [];

function xfer(count, src, dest) {
  printStatus();
  if(count === 1) {
    dest.push(src.pop());
  } else {
    var other = getOtherTower(src, dest);
    xfer(count-1, src, other);
    dest.push(src.pop());
    xfer(count-1, other, dest);
  }
}

function getOtherTower(A, B) {
  var towers = [];
  towers.push(towerA);
  towers.push(towerB);
  towers.push(towerC);
  for(var i=0; i < 3; i++) {
    if(towers[i] !== A && towers[i] !== B) {
      return towers[i];
    }
  }
}

function getTowerStatus(tower) {
  var status = '';
  for(var i=0; i < tower.length; i++) {
    status += tower[i];
  }
  return status;
}

function printStatus() {
  var status = 'A:';
  status += getTowerStatus(towerA);
  status += ' B:';
  status += getTowerStatus(towerB);
  status += ' C:';
  status += getTowerStatus(towerC);
  console.log(status);
}


towerA.push(8);
towerA.push(7);
towerA.push(6);
towerA.push(5);
towerA.push(4);
towerA.push(3);
towerA.push(2);
towerA.push(1);

xfer(8, towerA, towerC);
printStatus();