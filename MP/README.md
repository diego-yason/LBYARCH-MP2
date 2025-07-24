# LBYARCH-MP2

## Explanation of files

- `main.c`, `asmfunc.asm` - source files
- `LBYARCH.exe` - the actual executable compiled from Visual Studio
- `timer.js` - code used to benchmark and generate inputs
- `results/*` - outputs of timer.js from my own testing. files are renamed to its relevant details
- `recording.mp4` - actual video of code, compilation, and execution
- `output/*` - actual sample input and output used for execution
- `sampleOutput.png` - picture of both input and output found in `output` folder.

## Results

The execution video of the program can be found [here](https://github.com/diego-yason/LBYARCH-MP2/blob/5172108a81113ff18312016b7cf13d7ea25fc196/MP/recording.mp4).

The program was conducted 50 times via script using a typescript/javascript program. Each individual test uses a different, randomly generated dataset. NodeJS's `performance` module was utilized to take the duration.

The average execution times are as follows:

| size | time taken | time/number |
|------|------------|-------------|
| 10x10 | 20.23ms | 0.2023ms |
| 100x100 | 40.64ms | 0.004064ms |
| 1000x1000 | 2088.13ms | 0.002088ms |

Based on the `time/number` data, it is clear that the larger the dataset is, the more efficient the program is. I can theorize that this is because of the set up required by the program to load up both C and ASM programs, which is already naturally an expensive task that would take the same amount of time, regardless of the amount of data processed. By having more data, the time consumed by the expensive task is shared more broadly, leading to a shorter `time/number`.
