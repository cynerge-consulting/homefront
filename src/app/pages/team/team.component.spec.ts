import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ngMocks, MockComponent } from "ng-mocks";

import { TeamComponent } from "./team.component";
import { GameComponent } from "src/app/game/game.component";

describe("TeamComponent", () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamComponent, MockComponent(GameComponent)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
