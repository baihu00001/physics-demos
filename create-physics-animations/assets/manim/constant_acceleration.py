from manim import *


class ConstantAccelerationLesson(Scene):
    """A reusable Chinese lesson scene for one-dimensional constant acceleration."""

    def construct(self):
        x0 = 0.0
        v0 = 1.0
        acceleration = 1.2
        duration = 4.0
        scene_scale = 0.75

        title = Text("匀加速直线运动", font_size=40).to_edge(UP)
        equation = MathTex(
            r"x=x_0+v_0t+\frac{1}{2}at^2",
            font_size=38,
        ).next_to(title, DOWN)
        axis = NumberLine(
            x_range=[0, 12, 1],
            length=10,
            include_numbers=True,
            include_tip=True,
        ).shift(DOWN * 1.6)
        axis_label = MathTex("x/\\mathrm{m}").next_to(axis, RIGHT)

        time = ValueTracker(0)
        ball = Dot(color=BLUE, radius=0.16)
        ball.add_updater(
            lambda mob: mob.move_to(
                axis.n2p(
                    min(
                        12,
                        scene_scale
                        * (
                            x0
                            + v0 * time.get_value()
                            + 0.5 * acceleration * time.get_value() ** 2
                        ),
                    )
                )
            )
        )

        velocity_arrow = always_redraw(
            lambda: Arrow(
                ball.get_center(),
                ball.get_center()
                + RIGHT * (0.7 + 0.18 * (v0 + acceleration * time.get_value())),
                buff=0,
                color=GREEN,
                max_tip_length_to_length_ratio=0.18,
            )
        )
        velocity_label = always_redraw(
            lambda: MathTex(
                rf"v={v0 + acceleration * time.get_value():.1f}\,\mathrm{{m/s}}",
                color=GREEN,
                font_size=30,
            ).next_to(velocity_arrow, UP)
        )
        time_label = always_redraw(
            lambda: MathTex(
                rf"t={time.get_value():.1f}\,\mathrm{{s}}",
                font_size=32,
            ).to_corner(UR)
        )

        self.play(Write(title))
        self.play(Create(axis), Write(axis_label), FadeIn(ball))
        self.play(Write(equation))
        self.play(GrowArrow(velocity_arrow), FadeIn(velocity_label), FadeIn(time_label))
        self.play(time.animate.set_value(duration), run_time=duration, rate_func=linear)
        conclusion = Text(
            "加速度恒定时，速度均匀增加，位移增长越来越快",
            font_size=30,
        ).to_edge(DOWN)
        self.play(Write(conclusion))
        self.wait(1)

