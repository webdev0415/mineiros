import multiprocessing


def spawn_process(number):
    print(f'Runs in separate process {number}')


if __name__ == '__main__':
    max_processes = 5

    print(f'Start {max_processes} processes')

    all_processes = [multiprocessing.Process(target=spawn_process, args=(i,)) for i in range(max_processes)]
    for p in all_processes:
        p.start()

    for p in all_processes:
        p.join()

    print('Finished running all Processes')
