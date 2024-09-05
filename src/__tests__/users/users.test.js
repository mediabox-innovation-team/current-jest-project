// users.test.js
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Users from "../../pages/Users/Users";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
  jest.spyOn(console, "error").mockImplementation(jest.fn());
});

/* pour enlever les commentaires apres une execution */
afterEach(() => {
  jest.clearAllMocks();
  jest.useRealTimers();
});

jest.mock("axios");

describe("Composant utilisateur : ", () => {
  const usersData = [
    {
      id: 1,
      name: "a bas",
      username: "abas",
      email: "abas@gmail.com",
      phone: "69322828",
      website: "abas.com",
    },
    {
      id: 2,
      name: "alpha bas",
      username: "alphabas",
      email: "alphabas@gmail.com",
      phone: "069322828",
      website: "alphabas.com",
    },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: usersData });
    jest.clearAllMocks();
  });

  test("Rendre le composant users dans async et tester quelque informations dans lArray", async () => {
    // const Application = WithProviders(Users);
    // const titleComponents =
    render(<Users />);
    const emailElement = await screen.findByText(/alphabas@gmail.com/i);
    expect(emailElement).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText("INNOVATION UI __ FRONT __ JEST AND TESTING LIBRARY")
      ).toBeInTheDocument();
      expect(screen.getByText("a bas")).toBeInTheDocument();
      expect(screen.getByText("alpha bas")).toBeInTheDocument();
    });
  });

  it("Button pour le lancement du modal d creation utilisateur, controle de lEvent le onClick", async () => {
    render(<Users />);

    const createButton = screen.getByRole("button", { name: /Add New User/i });
    expect(createButton).toBeInTheDocument();

    await waitFor(() => {
      const boutonCreationUser = screen.getAllByRole("button", {
        name: /Add New User/i,
      });
      fireEvent.click(boutonCreationUser[0]); // Cliquez sur le premier bouton trouvé
      expect(boutonCreationUser[0]).toBeVisible();
    });
  });

  it("Bouton pour lancer le modal voir detail utilisateur", async () => {
    render(<Users />);

    const boutonVoirPlus = await waitFor(() =>
      screen.getAllByTestId("view-user-button")
    );
    expect(boutonVoirPlus.length).toBeGreaterThan(0);
    fireEvent.click(boutonVoirPlus[0]);
    expect(boutonVoirPlus[0]).toBeVisible();
  });

  it("Test pour lancement du modal de modification utilisateur", async () => {
    render(<Users />);

    const boutonEdit = await waitFor(() =>
      screen.getAllByTestId("edit-user-button")
    );
    expect(boutonEdit.length).toBeGreaterThan(0);
    fireEvent.click(boutonEdit[0]);
    expect(boutonEdit[0]).toBeVisible();
  });

  it("Test pour lancement du modal de supression utilisateur", async () => {
    render(<Users />);

    const boutonDelete = await waitFor(() =>
      screen.getAllByTestId("delete-user-button")
    );
    expect(boutonDelete.length).toBeGreaterThan(0);
    fireEvent.click(boutonDelete[0]);
    expect(boutonDelete[0]).toBeVisible();
  });
});
