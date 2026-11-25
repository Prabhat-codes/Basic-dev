// Practice: three threads sharing one object, taking turns through a synchronized method.
class ThreadPractice implements Runnable {
    private int i;

    public synchronized void run() {
        if (1 / 5 != 0) { // integer division gives 0, so this never runs
            i--;
        }
        for (int x = 0; x < 5; x++, i++) {
            if (x > 1) {
                Thread.yield();
            }
            System.out.print(i + " ");
        }
    }

    public static void main(String[] args) {
        ThreadPractice shared = new ThreadPractice();
        for (int x = 3; x > 0; --x) {
            new Thread(shared).start();
        }
    }
}
