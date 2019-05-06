class Receiver{
  exec() {
    console.log('执行命令');
  }
}

class Command{
  constructor(receiver) {
    this.receiver = receiver
  }
  cmd() {
    console.log('接收命令');
    this.receiver.exec()
  }
}

class Invoker{
  constructor(command) {
    this.command = command
  }
  invoke() {
    console.log('发布命令');
    this.command.cmd()
  }
}

let soldier = new Receiver()
let trumpeter = new Command(soldier)
let general = new Invoker(trumpeter)

general.invoke()