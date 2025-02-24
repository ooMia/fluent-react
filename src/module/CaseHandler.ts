interface Case {
  src: string;
  render: Function;
}

const CaseHandler = {
  cases: [] as Array<Case>,

  addCase(src: string, render: Function) {
    this.cases.push({ src, render });
  },

  getCases() {
    return Object.keys(this.cases);
  },
};

export { CaseHandler };
