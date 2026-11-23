# Tiny stack VM

Run `node main.ts` with Node.js 22. The interpreter reads each instance's
`program.bin` and `input.bin` from `MAKEFUN_INPUT_DIR` (default `/input`) and
writes `stdout.bin` and `exit.txt` under the same ID in `MAKEFUN_OUTPUT_DIR`
(default `/output`).
