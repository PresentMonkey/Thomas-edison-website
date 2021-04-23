import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, k as add_location, l as insert_dev, m as append_dev, o as listen_dev, p as set_data_dev, n as noop, r as validate_each_argument, u as create_component, w as claim_component, x as mount_component, y as transition_in, z as transition_out, A as destroy_component, a as space, q as query_selector_all, c as claim_space, j as attr_dev, B as check_outros, C as destroy_each, D as group_outros } from './client.624a5b69.js';
import { b as build } from './index.2338b834.js';

/* src/components/Student.svelte generated by Svelte v3.37.0 */

const file$1 = "src/components/Student.svelte";

function create_fragment$1(ctx) {
	let li;
	let t0;
	let t1;
	let button;
	let t2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			li = element("li");
			t0 = text(/*name*/ ctx[0]);
			t1 = text(" | ");
			button = element("button");
			t2 = text("Give Star");
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			t0 = claim_text(li_nodes, /*name*/ ctx[0]);
			t1 = claim_text(li_nodes, " | ");
			button = claim_element(li_nodes, "BUTTON", {});
			var button_nodes = children(button);
			t2 = claim_text(button_nodes, "Give Star");
			button_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(button, file$1, 13, 13, 173);
			add_location(li, file$1, 13, 0, 160);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t0);
			append_dev(li, t1);
			append_dev(li, button);
			append_dev(button, t2);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*handleStar*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*name*/ 1) set_data_dev(t0, /*name*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Student", slots, []);
	var { name } = $$props;
	var { id } = $$props;
	var { socket } = $$props;

	function handleStar() {
		socket.emit("give_star", id);
	}

	const writable_props = ["name", "id", "socket"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Student> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("id" in $$props) $$invalidate(2, id = $$props.id);
		if ("socket" in $$props) $$invalidate(3, socket = $$props.socket);
	};

	$$self.$capture_state = () => ({ name, id, socket, handleStar });

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("id" in $$props) $$invalidate(2, id = $$props.id);
		if ("socket" in $$props) $$invalidate(3, socket = $$props.socket);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [name, handleStar, id, socket];
}

class Student extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { name: 0, id: 2, socket: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Student",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*name*/ ctx[0] === undefined && !("name" in props)) {
			console.warn("<Student> was created without expected prop 'name'");
		}

		if (/*id*/ ctx[2] === undefined && !("id" in props)) {
			console.warn("<Student> was created without expected prop 'id'");
		}

		if (/*socket*/ ctx[3] === undefined && !("socket" in props)) {
			console.warn("<Student> was created without expected prop 'socket'");
		}
	}

	get name() {
		throw new Error("<Student>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<Student>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get id() {
		throw new Error("<Student>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error("<Student>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get socket() {
		throw new Error("<Student>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set socket(value) {
		throw new Error("<Student>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/teacher.svelte generated by Svelte v3.37.0 */
const file = "src/routes/teacher.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (35:4) {#each students as student}
function create_each_block(ctx) {
	let student;
	let current;

	student = new Student({
			props: {
				name: /*student*/ ctx[2].name,
				id: /*student*/ ctx[2].id,
				socket: /*socket*/ ctx[0]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(student.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(student.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(student, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(student.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(student.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(student, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(35:4) {#each students as student}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let ul;
	let current;
	let each_value = /*students*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Teacher Interface");
			t2 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1jt1ry8\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Teacher Interface");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Teacher Interface";
			add_location(h1, file, 30, 0, 439);
			attr_dev(ul, "class", "svelte-1xcvf1y");
			add_location(ul, file, 33, 0, 468);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*students, socket*/ 3) {
				each_value = /*students*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(ul, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Teacher", slots, []);
	const socket = build();
	var students = [{ name: "Patrick", id: "test" }];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Teacher> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Student, io: build, socket, students });

	$$self.$inject_state = $$props => {
		if ("students" in $$props) $$invalidate(1, students = $$props.students);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [socket, students];
}

class Teacher extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Teacher",
			options,
			id: create_fragment.name
		});
	}
}

export default Teacher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlci4wNWZmNmIwNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3R1ZGVudC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3RlYWNoZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgZXhwb3J0IHZhciBuYW1lO1xuICAgIGV4cG9ydCB2YXIgaWQ7XG4gICAgZXhwb3J0IHZhciBzb2NrZXQ7XG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0YXIoKXtcbiAgICAgICAgc29ja2V0LmVtaXQoJ2dpdmVfc3RhcicsIChpZCkpO1xuICAgIH1cblxuXG48L3NjcmlwdD5cblxuPGxpPntuYW1lfSB8IDxidXR0b24gb246Y2xpY2s9e2hhbmRsZVN0YXJ9PkdpdmUgU3RhcjwvYnV0dG9uPjwvbGk+IiwiPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5UZWFjaGVyIEludGVyZmFjZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU3R1ZGVudCBmcm9tICcuLi9jb21wb25lbnRzL1N0dWRlbnQuc3ZlbHRlJztcbiAgICBpbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG4gICAgY29uc3Qgc29ja2V0ID0gaW8oKTtcblxuICAgIHZhciBzdHVkZW50cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1BhdHJpY2snLFxuICAgICAgICAgICAgaWQ6ICd0ZXN0J1xuICAgICAgICB9XG4gICAgXTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICB1bDo6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGNsZWFyOiBib3RoO1xuXHR9XG4gICAgbGkge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHR9XG48L3N0eWxlPlxuXG5cbjxoMT5UZWFjaGVyIEludGVyZmFjZTwvaDE+XG5cblxuPHVsPlxuICAgIHsjZWFjaCBzdHVkZW50cyBhcyBzdHVkZW50fVxuICAgICAgICA8U3R1ZGVudCBuYW1lPXtzdHVkZW50Lm5hbWV9IGlkPXtzdHVkZW50LmlkfSBzb2NrZXQ9e3NvY2tldH0gLz5cbiAgICB7L2VhY2h9XG48L3VsPlxuXG4iXSwibmFtZXMiOlsiaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBYUssR0FBSTs7Ozs7Ozs7O3NDQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFBc0IsR0FBVTs7Ozs7cURBQXBDLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FaTSxJQUFJO09BQ0osRUFBRTtPQUNGLE1BQU07O1VBR1IsVUFBVTtFQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkM0QmIsR0FBTyxJQUFDLElBQUk7b0JBQU0sR0FBTyxJQUFDLEVBQUU7dUJBQVUsR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFEeEQsR0FBUTs7OztnQ0FBYixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQyxHQUFROzs7OytCQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTVCQSxNQUFNLEdBQUdBLEtBQUU7S0FFYixRQUFRLE1BRUosSUFBSSxFQUFFLFNBQVMsRUFDZixFQUFFLEVBQUUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
