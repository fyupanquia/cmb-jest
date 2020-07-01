describe('Comparadores comunes', () => {
    const user = {
      name: "cmb",
      lastname: "cmb",
    };
    const user2 = {
      name: "cmb",
      lastname: "cmb",
    };
    test('shoudl be the same elements', () => {
        expect(user).toEqual(user2);
    });
    test('should not be the same elements', () => {
        expect(user).not.toEqual(user2);
    });
});